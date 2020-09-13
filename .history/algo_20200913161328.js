const image = require('get-image-data');
const fs = require('fs');
const worker = require('./worker')

function algo(){
    image('./image.png', function (err, img) {
        const width = 600
        const height = Math.round(width * img.height / img.width)
        const rgba = img.data
        const data = new Float64Array(width * height)
        for (let i = 0, n = rgba.length / 4; i < n; ++i) data[i] = Math.max(0, 1 - rgba[i * 4] / 200)
        const n = Math.round(width*height / 40)

        const points = worker({data, width, height, n})

        fs.writeFile('value.csv', points, 'utf8', function (err) {
          if (err) {
            console.log('Some error occured - file either not saved or corrupted file saved.');
          } else{
            console.log('It\'s saved!');
          }})
        
      })
}

algo()

module.exports = algo;