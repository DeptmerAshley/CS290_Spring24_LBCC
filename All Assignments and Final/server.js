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

// Store messages in an array
let messages = [];

// Endpoint to write data to a file
app.post('/write', (req, res) => {
    const message = req.body.message;
    if (typeof message !== 'string' || message.trim().length === 0) {
        return res.status(400).send('Invalid input: Message must be a non-empty string');
    }
    messages.push(message);
    fs.writeFile('data.txt', messages.join('\n'), (err) => {
        if (err) {
            return res.status(500).send('Error writing to file');
        }
        res.send('Message written to file');
    });
});

// Endpoint to read data from a file
app.get('/read', (req, res) => {
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading from file');
        }
        res.send(data);
    });
});

// Endpoint to list all messages
app.get('/messages', (req, res) => {
    res.json(messages);
});

// Endpoint to delete a message
app.delete('/delete', (req, res) => {
    const messageIndex = req.body.index;
    if (typeof messageIndex !== 'number' || messageIndex < 0 || messageIndex >= messages.length) {
        return res.status(400).send('Invalid index');
    }
    messages.splice(messageIndex, 1);
    fs.writeFile('data.txt', messages.join('\n'), (err) => {
        if (err) {
            return res.status(500).send('Error updating file');
        }
        res.send('Message deleted');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
