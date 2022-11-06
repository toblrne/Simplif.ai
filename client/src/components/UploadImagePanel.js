import React from "react";
import "../styles.css";
import UploadImageButton from "./UploadImageButton";

export default function UploadImagePanel() {
  return (
    <div className="panel">
      <h2>Upload your image</h2>
      <p>PNG & JPG files allowed</p>
      <UploadImageButton />
    </div>
  );
}
