import "./styles.css";
import UploadImagePanel from "./components/UploadImagePanel";
import ResultTextPanel from "./components/ResultTextPanel";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "@firebase/firestore";

function App() {


  useEffect(() => {
    const getSummary = (fullText) => {
      fetch("http://localhost:5000/getdata"                                               )
      .then((res) => {
        return res.text()
      })
      .then((data) => {
        console.log(data)
      })
      .catch(error => {
        console.log(error.status);
      })
    }
    getSummary("asdf");
  })

  return (
    <div className="App">
      <UploadImagePanel />
      <ResultTextPanel />
    </div>
  );
}

export default App;
