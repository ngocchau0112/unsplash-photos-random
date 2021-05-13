import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const UnsplashImages = (props) => {
  return (
    <div>
      <figure>
        <a href={props.url}>
          <LazyLoadImage
            className="item"
            src={props.url}
            key={props.key}
            alt={props.alt}
            effect="blur"
          />
        </a>
      </figure>
    </div>
  );
};

export default UnsplashImages;
