const { Storage } = require('@google-cloud/storage')
const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.get("/", (req, res) => res.send('hi'));

app.listen(port, () => console.log(`example app listening on port ${port}`))

const gc = new Storage({
    keyFilename: path.join(__dirname, './station-db-1f582c6cf101.json'),
    projectId: 'station-db'
});

const imageBucket = gc.bucket('station_image_data')
gc.getBuckets(imageBucket).then(results => {
    const bucket = results[0];

    console.log('Buckets:');
    buckets.forEach((bucket) => {
        console.log(bucket.name);
    });
})