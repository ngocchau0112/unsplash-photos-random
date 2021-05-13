import React, { useState, useEffect } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Loader from "./components/Loader";
import UnsplashImages from "./components/UnsplashImages";
import axios from "axios";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

//Style
const GlobalStyle = createGlobalStyle`
{
  margin: 0px;
  padding: 0;
  box-sizing: border-box;
}
`;

const WrapperImage = styled.section`
  max-width: 70rem;
  margin: 1rem auto;
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: masonry;

  @media (max-width: 1024px) {
    max-width: 60rem;
  }

  @media (max-width: 800px) {
    max-width: 55rem;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

function App() {
  const [images, setImages] = useState([]);

  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com";
    const apiKey = "UlzxMniZcRudnxBoC7eC7rPPyx4SJwcm2Ymp31--SFs";
    axios
      .get(`${apiRoot}/photos/random?client_id=${apiKey}&count=10`)
      .then((res) => setImages([...images, ...res.data]));
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="App">
      <Heading />
      <GlobalStyle />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <SimpleReactLightbox>
          <SRLWrapper>
            <WrapperImage>
              {images.map((image, index) => (
                <UnsplashImages
                  url={image.urls.small}
                  key={index}
                  alt={image.alt_description}
                />
              ))}
            </WrapperImage>
          </SRLWrapper>
        </SimpleReactLightbox>
      </InfiniteScroll>
    </div>
  );
}

export default App;
