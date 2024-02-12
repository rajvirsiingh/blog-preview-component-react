import React from "react";
import image from "./assets/images/illustration-article.svg";
const Image = () => {
  return (
    <div>
      <img src={image} alt="illustration" className="illustration" />
    </div>
  );
};

export default Image;
