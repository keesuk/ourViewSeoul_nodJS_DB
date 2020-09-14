const image = require('get-image-data');
const fs = require('fs');
const makeJson = require('./makeJson');
const worker = require('./worker');

function makeImg({stationEng, fileName, imgName, imgTag}){
  image(fileName, function (err, img) {
    const width = 600
    const height = Math.round(width * img.height / img.width)
    const rgba = img.data
    const data = new Float64Array(width * height)
    for (let i = 0, n = rgba.length / 4; i < n; ++i) data[i] = Math.max(0, 1 - rgba[i * 4] / 200)
    const n = Math.round(width*height / 40)

    function messaged() {
      for (let i = 0, n = points.length; i < n; i += 2) {
        const x = points[i], y = points[i + 1];
        x = x + 1.5;
        y = y;
      }
    }

    worker.addEventListenr("message", messaged);
    worker.postMessage({data, width, height, n})

    // makeJson({stationEng, imgName, imgTag, points})
  })
}

module.exports = makeImg;