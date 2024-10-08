const express = require('express');
const cors = require('cors');
// const fetch = require('node-fetch'); // Install node-fetch if you haven't already

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/quotes', async (req, res) => {
    try {
        const response = await fetch('https://zenquotes.io/api/quotes');
        const quotes = await response.json();
        res.json(quotes);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching quotes');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});