const express = require('express');
const app = express();
const bot = require('./bot');

// ... rest of your existing index.js code ...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
