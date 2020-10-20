const csv = require('csv-parser')
const fs = require('fs');
const path = require("path");


function filter(preImgTag){

    let dirNow = path.dirname(require.main.filename);
    let filterData = [];
    let imgTag = preImgTag.replace(",", "");

    fs.createReadStream(dirNow + "/src/data/seoulCategory.csv")
    .pipe(csv())
    .on('data', function(csvrow) {
        filterData.push(csvrow)
    })
    .on('end', function() {
        let imgTagID = filterData.find(x => x.category === imgTag)
        return imgTagID[id]
    })
}

module.exports = filter;