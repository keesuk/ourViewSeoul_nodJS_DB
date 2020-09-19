const fs = require('fs');

function creatJson(stationEng) {
    let obj = {
        'list' : [],
    };
    let data = JSON.stringify(obj, null, 2);

    fs.writeFile('./src/data/'+ stationEng +'.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file')
    })
}

module.exports = creatJson;