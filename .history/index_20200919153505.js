const crwal = require('./src/crwal');
const csv = require('csv-parser')
const fs = require('fs');
const path = require("path");

let dirNow = path.dirname(require.main.filename);
let csvData = [];

fs.createReadStream(dirNow + "/src/data/seoulStation.csv")
  .pipe(csv())
  .on('data', function(csvrow) {
    csvData.push(csvrow);
  })
  .on('end', function() {
    crwal(csvData);
  })