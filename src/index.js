const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h2>Hello world</h2>');
});

app.listen(PORT, () => console.log(`api is running on port${PORT}`));