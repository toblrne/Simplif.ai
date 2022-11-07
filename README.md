## Simplif.ai
### Submitted to HackCamp 2022
### Ryan Gao, Allan Tan, Emily Chan, Jack Wang


### The Problem
When reading school textbooks or news articles online, a major issue that arises is the unnecessary amount of text that is required to explain an extremely simple concept.

As a result, these dense texts will be difficult for users to digest if they are not fluent in the language or have learning disabilities such as dyslexia or ADHD.

Enter Simplif.ai, our web application that aims to tackle the issue of accessible language and comprehension for all.

### Our Solution
We came up with an AI powered solution that uses image recognition & natural language processing (NLP) to summarize large bodies of text from an image.

Unlike many other products which have to be maintained and installed by professionals, Simplif.ai only requires you to obtain a picture of text and upload it to your computer. Simplif.ai works with printed documents, handwriting, and screenshots of text. So, when you or someone around you is having trouble understanding text or focusing on reading, our web application will be able to help you by returning a simple yet accurate version of the text for easy comprehension.

### How we built it
We built the AI aspect of our application on top of Google Cloud Vision, an API that is able to handle image-to-text processing, and the NLP Cloud Summarizer API, which leverages machine learning to return a shorter but still accurate summarization of a piece of text. Our front-end UI/UX design was done in Figma, and the actual front-end itself was built using React.js and CSS, allowing users to upload images to be transcribed. Our backend was built with Express and Node.js, which takes the uploaded images and sends them through the two APIs that we set up to return the processed text back to the front-end.

### Challenges we ran into
The biggest challenge we ran into was that none of our team members knew anything about back-end development. While setting up the Express server, we had a lot of trouble figuring out how to properly send images to the backend from the front-end to be processed. However, after a lot of troubleshooting with mentors and digging with some libraries, we were able to make a fully functioning application.

### What we learned
Back-end development (express, node.js)
Working with google cloud vision and NLP
Designing UX/UI for developer handoff

### What's next for Simplif.ai
We want to implement more features such as being able to copy and paste text into our web app, being able to store and save files with an account, as well as creating a mobile app version to natively take photos of text.

### Technologies Used
html, css, javascript, react.js, express, node.js, google cloud vision, nlp cloud summarizer api, figma
