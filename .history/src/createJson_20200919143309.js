const fs = require('fs');

function makeJsonStation(stationEng) {
    let obj = {
        list = [],
    };
    let data = JSON.stringify(obj, null, 2);

    fs.writeFile('./data/'+ stationEng + '.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file')
    })
}

module.exports = makeJsonStation;