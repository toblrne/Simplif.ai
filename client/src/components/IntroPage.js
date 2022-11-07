import React from "react";
import simplifaiLogo1 from "../images/logo1.png";
import leaf from "../images/leaf.png";
import leaf2 from "../images/leaf2.png";
import "../introPageStyles.css";

export default function IntroPage() {
  return (
    <div className="introPage">
      <img src={simplifaiLogo1} />
      <div className="introPanel">
        <h2>Summarize your text in just a few steps!</h2>
        <div className="desc">
          Simply upload an image with text or paste in a body of text
        </div>
        <div className="imageUpload">
          <img src={leaf} />
          <div className="imageUpload--button">
            <h2>Image Upload</h2>
          </div>
        </div>
        <div className="pasteText">
          <img src={leaf2} />
          <div className="pasteText--button">
            <h2>Paste Text</h2>
          </div>
        </div>
      </div>
    </div>
  );
}