import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const UnsplashImages = (props, index) => {
  return (
    <div className="images">
      <a href={props.url}>
        <LazyLoadImage
          className="item"
          src={props.url}
          key={index}
          alt={props.alt}
          effect="blur"
        />
      </a>
    </div>
  );
};

export default UnsplashImages;
