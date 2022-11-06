const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
const NLPCloudClient = require('nlpcloud');
const vision = require('@google-cloud/vision');

app.get("/getdata", async (req, res) => {
        // Creates a client
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
        console.log(response.data);
        })
        .catch(function (err) {
            console.error(err.response.status);
            console.error(err.response.data.detail);
        }) 
        res.send(text);
})

app.listen(5000, '127.0.0.01', () => console.log('Server Running!'));

