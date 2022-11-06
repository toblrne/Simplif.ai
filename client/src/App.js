import "./styles.css";
import UploadImagePanel from "./components/UploadImagePanel";
import ResultTextPanel from "./components/ResultTextPanel";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "@firebase/firestore";

function App() {
  return (
    <div className="App">
      <UploadImagePanel />
      <ResultTextPanel />
    </div>
  );
}

export default App;
