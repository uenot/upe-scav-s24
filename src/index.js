const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const lib = require('./lib.js')

dotenv.config();

const app = express();
const port = process.env.PORT;

let endpt = process.env.INITIAL_ENDPOINT
for (let i = 0; i < process.env.MAZE_LENGTH; i++) {
    const next = lib.encode(endpt)
    app.get(`/maze/${endpt}`, (req, res) => {
        res.send(next);
    });
    endpt = next
}

app.get(`/maze/${endpt}`, (req, res) => {
    res.sendFile(path.join(__dirname, 'end.txt'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'intro.html'));
});

app.get('/hb', (req, res) => {
    res.send("hi!")
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});