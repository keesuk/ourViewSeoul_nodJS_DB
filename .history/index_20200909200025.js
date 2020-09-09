const crwal = require('./src/crwal');
const fs = require('fs');
const parse = require('csv-parse');
const path = require("path");

var csvData = [];
var dirNow = path.dirname(require.main.filename);

fs.createReadStream(dirNow + "/PseoulStation.csv")
  .pipe(parse({delimiter: ':'}))
  .on('data', function(csvrow) {
      for(let i =0; i<csvrow.length; i++){
        csvData.push(csvrow[i]);
        let str = `${row["korCor"]} bought ${row["engCor"]} .`;
        console.log(str)
      };
  })
  .on('end', function() {
    console.log(csvData);
    crwal(csvData);
  })

