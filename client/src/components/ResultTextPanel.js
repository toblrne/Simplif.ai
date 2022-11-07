import { useState, useEffect } from "react";
import "../resultTextStyles.css";

export default function ResultText({result}) {
  return (
    <div className="resultTextPanel">
      <p>Your summary here:</p>
      <div className="textPanel">
        <p>{result}</p>
      </div>
    </div>
  );
}