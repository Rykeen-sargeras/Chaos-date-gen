// Optional Express server for Render Web Service deployment
// Not needed if deploying as Static Site

const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(__dirname));

// Serve index.html for root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check for Render
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', version: '4.0.0', theme: 'valentine' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`💘 Chaos Date Generator running on port ${PORT}`);
});
