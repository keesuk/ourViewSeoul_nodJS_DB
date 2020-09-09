const crwal = require('./src/crwal');
const fs = require('fs');
const parse = require('csv-parse');
const path = require("path");

var csvData = [];
var dirNow = path.dirname(require.main.filename);

fs.createReadStream(dirNow + "/PseoulStation.csv")
.fromString('data', { headers: ['korCor', 'engCor'], renameHeaders: true, discardUnmappedColumns: true })
  .pipe(parse({delimiter: ':'}))
  .on('data', function(csvrow) {
      for(let i =0; i<csvrow.length; i++){
        csvData.push(csvrow[i]);
      };
  })
  .on('end', function() {
    console.log(csvData);
    crwal(csvData);
  })

