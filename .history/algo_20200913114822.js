const image = require('get-image-data');
const fs = require('fs');

function algo(){
    image('./image.png', function (err, img) {
        const height = img.height
        const width = img.width

        const {data: rgba} = img.data
        const data = new Float64Array(width * height)

        for (let i = 0, n = rgba.length / 4; i < n; ++i) {
          data[i] = Math.max(0, 1 - rgba[i * 4] / 200)
        }
      })      
}
algo();

module.exports = algo;