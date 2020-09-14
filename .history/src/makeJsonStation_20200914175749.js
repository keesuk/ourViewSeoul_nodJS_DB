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
    
    let obj = {[stationEng]: [] }
    obj[stationEng].push({
        "location" : "stationEng",
        "lcoationName" : "imgName",
        "locationTag" : "imgTag",
        "locationData" : "pointsArr"
    })
    let json = JSON.stringify(obj)
    console.log(json)
    saveJSON('./src/data/seoul.json', json)
}

module.exports = makeJsonStation;