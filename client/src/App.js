import "./App.css";
import UploadImagePanel from "./components/UploadImagePanel";
import ResultTextPanel from "./components/ResultTextPanel";
import HomePage from "./components/HomePage";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "@firebase/firestore";
import IntroPage from "./components/IntroPage";

function App() {
  useEffect(() => {
    const getSummary = (fullText) => {
      fetch("http://localhost:5000/getdata")
        .then((res) => {
          return res.text();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error.status);
        });
    };
    getSummary("asdf");
  });

  return (
    <div className="App">
      <HomePage />
      <div class="panell">
        <a id="introPage">
          <IntroPage />
        </a>
        <UploadImagePanel />
        <ResultTextPanel />
      </div>
    </div>
  );
}

export default App;
