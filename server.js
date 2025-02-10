const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Welcome to PocketData!')
})

app.listen(port, () => {
    console.log(`PocketData is Running!`)
})


//This is how to make a request to OpenAI API
// import 'dotenv/config'; // Automatically loads environment variables from .env file
// import OpenAI from 'openai';

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// async function run() {
//     const completion = await openai.chat.completions.create({
//         model: "gpt-3.5-turbo",
//         messages: [{ role: "user", content: "Hello!" }]
//     });
//     console.log(completion);
// }

// run();