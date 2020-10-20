const csv = require('csv-parser')
const fs = require('fs');
const path = require("path");


    let dirNow = path.dirname(require.main.filename);
    let filterData = [];

    fs.createReadStream(dirNow + "/src/data/seoulCategory.csv")
    .pipe(csv())
    .on('data', function(csvrow) {
        filterData.push(csvrow['category'])
        filterData.push(csvrow['id'])
    })
    .on('end', function() {
        console.log(filterData['한식'])
    })


    // 한식, 1 