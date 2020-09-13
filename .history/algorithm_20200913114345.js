const image = require('get-image-data');
const fs = require('fs');

function algorithm(){
    image('./image.png', function (err, img) {
        var height = img.height
        var width = img.width
        console.log(height)
        console.log(width)

        var {data: rgba} = img.data
        var data = new Float64Array(width * height)

        for (let i = 0, n = rgba.length / 4; i < n; ++i) {
          data[i] = Math.max(0, 1 - rgba[i * 4] / 200)
        }
      })      
}
algorithm();

module.exports = algorithm;