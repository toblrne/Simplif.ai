import React, { useState } from "react";
import "../uploadButtonStyles.css";
import uploadIcon from "../images/uploadIcon.png";

export default function UploadImageButton({ getUserInput }) {

  const [selectedFile, setSelectedFile] = useState(null);

  const changeHandler = (event) => {
    getUserInput(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  }


  return (
    <div className="uploadButton">
      <input type="file" id="actual_button" onChange={changeHandler}/>
      <label for="actual_button" className="uploadButton">
        <img src={uploadIcon} />
        <p>Select file from your computer</p>
      </label>
    </div>
  );
}