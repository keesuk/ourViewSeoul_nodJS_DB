const { Storage } = require('@google-cloud/storage')
const path = require('path');

async function uploadfile(stationEng) {
    const gc = new Storage({
        keyFilename: path.join(__dirname, '../station-db-1f582c6cf101.json'),
        projectId: 'station-db'
    });

    const filename = './src/data/JSON/'+ stationEng +'.json'

    await gc.bucket('station_image_data').upload(filename, {
        gzip: true,
        destination: 'station_image/'+stationEng,
        metadata: {
            cacheControl: 'public, max-age=31536000',
        },
    });

    console.log(`${filename} uploaded`)
}

module.exports = uploadfile;