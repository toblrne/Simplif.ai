const express = require("express");

const app = express();
const NLPCloudClient = require('nlpcloud');
const vision = require('@google-cloud/vision');

const port = 4000;

app.get("/", (req, res) => res.send("Hello World!"))
app.get("/new", (req, res) => res.send("NEW"))
app.get("/getData", async (req, res) => {
    const gClient = new vision.ImageAnnotatorClient({
        keyFilename: './apikey.json',
        apiEndpoint: 'us-vision.googleapis.com'
    })
  
    // Performs text detection on the image file
    const [result] = await gClient.textDetection('./news.png');
    const labels = result.textAnnotations

    textArray = labels.map(label => label.description)
    text = textArray[0]


    const client = new NLPCloudClient('bart-large-cnn','92618546913670c8dd7b61517096d4af64fca6d5')
    // Returns an Axios promise with the results.
    // In case of success, results are contained in `response.data`. 
    // In case of failure, you can retrieve the status code in `err.response.status` 
    // and the error message in `err.response.data.detail`.
    client.summarization(text).then(function (response) {
    testdata = response.data.summary_text;
    res.send(testdata)
})
})


// async function setEndpoint() {

//     // Creates a client
//     const gClient = new vision.ImageAnnotatorClient({
//         keyFilename: './apikey.json',
//         apiEndpoint: 'us-vision.googleapis.com'
//     })
  
//     // Performs text detection on the image file
//     const [result] = await gClient.textDetection('./news.png');
//     const labels = result.textAnnotations

//     textArray = labels.map(label => label.description)
//     text = textArray[0]


//     const client = new NLPCloudClient('bart-large-cnn','92618546913670c8dd7b61517096d4af64fca6d5')
//     // Returns an Axios promise with the results.
//     // In case of success, results are contained in `response.data`. 
//     // In case of failure, you can retrieve the status code in `err.response.status` 
//     // and the error message in `err.response.data.detail`.
//     client.summarization(text).then(function (response) {
//     testdata = response.data.summary_text;
//     console.log(testdata)
//     return testdata
//     })
    
// }
//     setEndpoint();

app.listen(port, () => console.log(`Server Running on port ${port}!`));

