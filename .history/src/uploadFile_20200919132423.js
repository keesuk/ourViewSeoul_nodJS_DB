const { Storage } = require('@google-cloud/storage')
const path = require('path');

async function uploadfile() {
    const gc = new Storage({
        keyFilename: path.join(__dirname, './station-db-1f582c6cf101.json'),
        projectId: 'station-db'
    });

    await gc.bucket('station_image_data').upload(filename, {
        gzip: true,
        metadata: {
            cacheControl: 'public, max-age=31536000',
        },
    });

    console.log(`${filename} uploaded to ${bucketName}`)
}