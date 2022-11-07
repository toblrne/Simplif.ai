const express = require("express");
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
const app = express();
app.use(cors());
app.use(express.json());
const NLPCloudClient = require('nlpcloud');
const vision = require('@google-cloud/vision');

app.post("/getdata", upload.single('file'), async (req, res) => {
        // Creates a client
        const gClient = new vision.ImageAnnotatorClient({
            keyFilename: './apikey.json',
            apiEndpoint: 'us-vision.googleapis.com'
        })
        
        // console.log(req);
        // Performs text detection on the image file
        const [result] = await gClient.textDetection(req.file.path);
        const labels = result.textAnnotations
    
        textArray = labels.map(label => label.description)
        text = textArray[0]


        const client = new NLPCloudClient('bart-large-cnn','a488755630386d1a8ace26771c7965e37eba6970')
        // Returns an Axios promise with the results.
        // In case of success, results are contained in `response.data`. 
        // In case of failure, you can retrieve the status code in `err.response.status` 
        // and the error message in `err.response.data.detail`.
        client.summarization(text).then(function (response) {
            console.log(response.data);
            text = response.data.summary_text;
        }).then(() => {
            res.send(text);
        })
        .catch(function (err) {
            console.error(err.response.status);
            console.error(err.response.data.detail);
        });
    })

app.listen(5000, '127.0.0.01', () => console.log('Server Running!'));