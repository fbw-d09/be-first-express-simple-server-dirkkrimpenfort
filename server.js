const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/hello', (req, res) => {
    res.send('Hallo! Willkommen auf der /hello-Seite.');
});

app.get('/time', (req, res) => {
    const currentTime = new Date().toISOString();
    res.send(`Aktuelle Uhrzeit und Datum: ${currentTime}`);
});

app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100); // Zufallszahl von 0 bis 99
    res.send(`Zufallszahl: ${randomNumber}`);
});

app.get('/isNumber/:value', (req, res) => {
    const value = req.params.value;
    
    if (!isNaN(Number(value))) {
        res.send(`Dies ist eine Zahl: ${value}`);
    } else {
        res.send(`Dies ist keine Zahl: ${value}`);
    }
});

app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});


