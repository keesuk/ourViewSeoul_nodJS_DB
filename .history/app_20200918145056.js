const { Storage } = require('@google-cloud/storage')
const express = require('express');
const app = express();
const port = 5000;

app.get("/", (req, res) => res.send('hi'));

app.listen(port, () => console.log(`example app listening on port ${port}`))