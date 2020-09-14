const fs = require('fs');

function makeJsonStation(stationEng) {

    function loadJSON(filename = '') {
        return JSON.parse(
            fs.existsSync(filename)
                ? fs.readFileSync(filename).toString()
                : '""'
        )
    }

    function saveJSON(filename = '', json = '""') {
        return fs.writeFile(
            filename, 
            JSON.stringify(
                json, 
                null, 
                3
            ))
    }

    // const seoul = loadJSON('./src/data/seoul.json')
    let obj = {[stationEng]: [] }
    obj[stationEng].push({
        "location" : "stationEng",
        "lcoationName" : "imgName",
        "locationTag" : "imgTag",
        "locationData" : "pointsArr"
    })
    let json = JSON.stringify(obj)
    saveJSON('./src/data/seoul.json', obj)
}

module.exports = makeJsonStation;