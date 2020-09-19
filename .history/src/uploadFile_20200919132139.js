const { Storage } = require('@google-cloud/storage')
const path = require('path');

const gc = new Storage({
    keyFilename: path.join(__dirname, './station-db-1f582c6cf101.json'),
    projectId: 'station-db'
});

const imageBucket = gc.bucket('station_image_data')
gc.getBuckets(imageBucket).then(results => {
    const buckets = results[0];

    console.log('Buckets:');
    buckets.forEach((bucket) => {
        console.log(bucket.name);
    });
})

async function uploadfile() {
    await gc.bucket('station_image_data').upload
}