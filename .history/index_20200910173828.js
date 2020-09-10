const crwal = require('./src/crwal');
const csv = require('csv-parser')
const fs = require('fs');
const path = require("path");

var dirNow = path.dirname(require.main.filename);
var csvData = [];

fs.createReadStream(dirNow + "/PseoulStation.csv")
  .pipe(csv())
  .on('data', function(csvrow) {
    csvData.push(csvrow);
  })
  .on('end', function() {
    crwal(csvData);
  })

