const image = require('get-image-data');
const fs = require('fs');
const stations = require("./data/seoulStation.json"); 
const path = require("path");
const worker = require('./worker');

function makeImg({stationName, fileName, imgName, imgTag}){
    image(fileName , function (err, img) {
        const width = 600
        const height = Math.round(width * img.height / img.width)
        const rgba = img.data
        const data = new Float64Array(width * height)
        for (let i = 0, n = rgba.length / 4; i < n; ++i) data[i] = Math.max(0, 1 - rgba[i * 4] / 200)
        const n = Math.round(width*height / 40)
        const points = worker({data, width, height, n})
        console.log(points)
        let station  = { 
          stationName: stationName, 
          locationName: imgName,
          locationTag: imgTag,
        }; 
        stations.push(station); 

        fs.writeFile("seoulStation.json", JSON.stringify(stations), err => { 
            if (err) throw err;  
            console.log("Done writing");
        });
      })
}

module.exports = makeImg;