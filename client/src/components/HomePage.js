import React from "react";
import "../homePageStyles.css";
import simplifaiLogo from "../images/logo.png";

export default function HomePage() {
  return (
    <div className="homePage">
      <img src={simplifaiLogo} />
      <h1>simplif.ai</h1>
      <h2>Convert large bodies of text into easy-to-read summaries</h2>
      <div className="anchorButton">
        <h2>Try it!</h2>
      </div>
    </div>
  );
}
