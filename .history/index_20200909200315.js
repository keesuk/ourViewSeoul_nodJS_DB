const crwal = require('./src/crwal');
const csv = require('csv-parser')
const fs = require('fs');
const parse = require('csv-parse');
const path = require("path");

var csvData = [];
var dirNow = path.dirname(require.main.filename);

fs.createReadStream(dirNow + "/PseoulStation.csv")
  .pipe(csv())
  .on('end', function() {
    console.log(csvData);
    crwal(csvData);
  })

