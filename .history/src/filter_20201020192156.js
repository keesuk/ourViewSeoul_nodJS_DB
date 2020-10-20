const csv = require('csv-parser')
const fs = require('fs');
const path = require("path");


function filter(imgTag){

    let dirNow = path.dirname(require.main.filename);
    let filterData = [];
    let val = imgTag.replace(",", "");

    fs.createReadStream(dirNow + "/src/data/seoulCategory.csv")
    .pipe(csv())
    .on('data', function(csvrow) {
        filterData.push(csvrow)
    })
    .on('end', function() {
        let imgTagID = filterData.find(x => x.category === imgTag)
        console.log(imgTagID)
        // return imgTagID[id]
    })
}

module.exports = filter;