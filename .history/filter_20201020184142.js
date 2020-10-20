const csv = require('csv-parser')
const fs = require('fs');
const path = require("path");


    let dirNow = path.dirname(require.main.filename);
    let filterData = [];

    fs.createReadStream(dirNow + "/src/data/seoulCategory.csv")
    .pipe(csv())
    .on('data', function(csvrow) {
        filterData.push(csvrow);
    })
    .on('end', function() {
        console.log(filterData.category)
    })
