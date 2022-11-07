import React from "react";
import "../panelStyles.css";
import UploadImageButton from "./UploadImageButton";

export default function UploadImagePanel({ getUserInput }) {

  return ( 
    <div className="panel">
      <h2>Upload your image</h2>
      <p>PNG & JPG files allowed</p>
      <UploadImageButton getUserInput={getUserInput}/>
    </div>
  );
}