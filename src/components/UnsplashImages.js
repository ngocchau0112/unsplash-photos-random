import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const UnsplashImages = (props) => {
  return (
    <div className="images">
      <a href={props.url}>
        <LazyLoadImage
          className="item"
          src={props.url}
          key={props.alt}
          alt={props.alt}
          effect="blur"
        />
      </a>
    </div>
  );
};

export default UnsplashImages;
