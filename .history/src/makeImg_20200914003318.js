const image = require('get-image-data');
const fs = require('fs');
const worker = require('./worker');

function makeImg({fileName, imgName, imgTag}){
    image(fileName, function (err, img) {
        const width = 600
        const height = Math.round(width * img.height / img.width)
        const rgba = img.data
        const data = new Float64Array(width * height)
        for (let i = 0, n = rgba.length / 4; i < n; ++i) data[i] = Math.max(0, 1 - rgba[i * 4] / 200)
        const n = Math.round(width*height / 40)
        const points = worker({ data, width, height, n })

        let obj = {
          table : []
        };
        obj.table.push({name: 'name', tag: 'tag', data: 'points'});
        fs.readFile('seoulStation.json', 'utf8', function readFileCallback(err, data){
          if (err){
              console.log(err);
          } else {
              obj = JSON.parse(data);
              obj.table.push({name: imgName, tag: imgTag, data: points});
              json = JSON.stringify(obj);
              fs.writeFile('seoulStation.json', json, 'utf-8', callback);
          }
      })

        return points
      })
}

module.exports = makeImg;