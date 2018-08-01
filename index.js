const express = require('express');

const port = 9001;
const app = express();

app.use("/", (req, res) => {
    res.send("Welcome to the index page!");
});

app.listen(port, () => console.log(`Express app listening on port ${port}!`));
