const csv = require('csv-parser')
const fs = require('fs');
const path = require("path");

function filter(){
    let dirNow = path.dirname(require.main.filename);
    let filterData = [];

    fs.createReadStream(dirNow + "/src/data/seoulCategory.csv")
    .pipe(csv())
    .on('data', function(csvrow) {
        filterData.push(csvrow);
    })
    .on('end', function() {
        console.log(filterData['도서관'])
    })
}

module.exports = filter;