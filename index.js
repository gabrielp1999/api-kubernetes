const express = require('express');
const app = express();
const port = 3001 || process.env.PORT;

// Sample route
app.get('/', (req, res) => {
    res.send({ message: 'Hello World!' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});