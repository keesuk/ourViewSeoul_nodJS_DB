const image = require('get-image-data');
const worker = require('./worker')
const fs = require('fs');

function algo(){
    image('./image.png', function (err, img) {
        const width = 600
        const height = Math.round(width * img.height / img.width)
        const rgba = img.data
        const data = new Float64Array(width * height)
        for (let i = 0, n = rgba.length / 4; i < n; ++i) data[i] = Math.max(0, 1 - rgba[i * 4] / 200)
        const n = Math.round(width*height / 40)

        worker({width, height, data, n})
      })
}

module.exports = algo;