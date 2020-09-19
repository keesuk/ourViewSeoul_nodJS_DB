const { Storage } = require('@google-cloud/storage')
const path = require('path');
const filename = './src/data/'+ stationEng +'.json'

async function uploadfile(stationEng) {
    const gc = new Storage({
        keyFilename: path.join(__dirname, './station-db-1f582c6cf101.json'),
        projectId: 'station-db'
    });

    await gc.bucket('station_image_data').upload(filename, {
        gzip: true,
        destination: 'folder/'+filename,
        metadata: {
            cacheControl: 'public, max-age=31536000',
        },
    });

    console.log(`${filename} uploaded to ${bucketName}`)
}

module.exports = uploadfile;