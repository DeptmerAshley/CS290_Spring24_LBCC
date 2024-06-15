const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.post('/write', (req, res) => {
    const message = req.body.message;
    fs.writeFile('data.txt', message, (err) => {
        if (err) {
            return res.status(500).send('Error writing to file');
        }
        res.send('Message written to file');
    });
});

app.get('/read', (req, res) => {
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading from file');
        }
        res.send(data);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
