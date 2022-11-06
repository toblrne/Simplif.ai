import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Output = () => {

    const [state, setState] = useState({result: "empty"});

    const handleClick = () => {
        axios
            .get("http://127.0.0.1:4000/getData")
            .then(response => {
                console.log(response)
            })
    }


    return (
        <div> 
            <button onClick={handleClick}> getInformation</button>
            <h1> output: {state.result}</h1>
        </div>
      );
}
 
export default Output;