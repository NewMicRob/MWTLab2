/*
Name: Michael R Newman
Student number: n01586930
Date: 09/28/2025
Prof: Sivagama Srinivasan
Course: Modern Web Technologies - CPAN - 212 - RNA
*/


// Server setup
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("<h1>Michael R Newman</h1><br><h2>LAB 2</h2>");
})

const onServerStart = () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log('Press CTRL + C to Stop the server');
}

app.listen(port, onServerStart);