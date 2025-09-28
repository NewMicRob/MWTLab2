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
const fs = require('fs').promises;

app.get('/', (req, res) => {
    res.send("<h1>Michael R Newman</h1><br><h2>LAB 2</h2>");
})

// Timeout
app.get('/timeout', (req, res) => {
    setTimeout(() => {
        res.json({id: 1, name: 'Michael R Newman'});
    }, 1000);
})

// Timeout function for promises
function getPromiseTimeout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = {id: 1, name: 'Michael R Newman'};
            if (success) {
                resolve(success);
            } else {
                reject('Promise Error');
            }
        }, 1000);
    })
};

// Promise
app.get('/promise', (req, res) => {
    getPromiseTimeout()
    .then((data) => {
        res.json(data);
    })
    .catch((error) => {
        res.status(500).send(error);
    });
});

// Async/Await
app.get('/async', async (req, res) => {
    try {
        const data = await getPromiseTimeout();
        res.json(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Async File read
app.get('/file', async (req, res) => {
    try {
        const data = await fs.readFile('index.txt', 'utf-8');
        res.send(data);
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
})

// Simulate delay helper function
function simulateDelay(ms) {
    return new Promise((resolve) => 
        setTimeout(resolve, ms))
};

app.get('/chain', async (req, res) => {
    try {
        await simulateDelay(1000);
        console.log('Login successful');
        await simulateDelay(1000);
        console.log('Fetching data');
        await simulateDelay(1000);
        console.log('Rendering data');
        res.send("Loading complete");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error: ' + err);
    }
});

// Server start 
const onServerStart = () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log('Press CTRL + C to Stop the server');
}

// Listens to port and displays start messages
app.listen(port, onServerStart);