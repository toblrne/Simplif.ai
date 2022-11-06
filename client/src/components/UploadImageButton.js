import React, { useRef } from "react";
import "../styles.css";
import uploadIcon from "../images/uploadIcon.png";

export default function UploadImageButton() {
  return (
    <div className="uploadButton">
      <input type="file" id="actual_button" />
      <label for="actual_button" className="uploadButton">
        <img src={uploadIcon} />
        <p>Select file from your computer</p>
      </label>
    </div>
  );
}