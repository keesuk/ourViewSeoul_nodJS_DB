const fs = require('fs');

function makeJsonStation(stationEng) {

    function saveJSON(filename = '', json = '""') {
        return fs.writeFileSync(
            filename, 
            JSON.stringify(
                json, 
                null, 
                3
            ))
    }
    
    obj.list.push({[stationEng]:[]})
    saveJSON('./src/data/seoul.json', obj)
}

module.exports = makeJsonStation;