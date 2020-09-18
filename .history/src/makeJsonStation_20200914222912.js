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
    
    obj.list[stationEng].push({
        "location" : "stationEng",
        "lcoationName" : "imgName",
        "locationTag" : "imgTag",
        "locationData" : "pointsArr"
    })
    saveJSON('./src/data/seoul.json', obj)
}

module.exports = makeJsonStation;