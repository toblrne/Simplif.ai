import "./App.css";
import UploadImagePanel from "./components/UploadImagePanel";
import ResultTextPanel from "./components/ResultTextPanel";
import HomePage from "./components/HomePage";
import { useState, useEffect } from "react";
import axios from "axios";

import { db } from "./firebase-config";
import { collection, getDocs } from "@firebase/firestore";
import IntroPage from "./components/IntroPage";

function App() {
  const [currentImage, setCurrentImage] = useState(null);
  const [summary, setSummary] = useState("");

  useEffect(() => {
    console.log(currentImage + "hi")
    const getSummary = (fullText) => {
      let data = new FormData();
      data.append('file', currentImage);

      axios.post("http://localhost:5000/getdata", data, {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(function(response) {
        console.log('her'+ response.data)
        setSummary(response.data);
      })
      .catch(function(error) {
        console.log(error);
      })
    }
    if (currentImage) {
      getSummary("asdf");
    } else {
      console.log("I am over here now.")
    }
  }, [currentImage])

  const getUserImage = (img) => {
    setCurrentImage(img);
  }
  return (
    <div className="App">
    <HomePage />
    <div class="panell">
      <a id="introPage">
        <IntroPage />
      </a>
      <UploadImagePanel getUserInput={getUserImage}/>
      <ResultTextPanel result={summary} />
    </div>
  </div>
  );
}

export default App;