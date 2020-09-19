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
        return fs.writeFileSync(
            filename, 
            JSON.stringify(
                json, 
                null, 
                2
            ))
    }
    
    const seoul = loadJSON(`./src/data/${stationEng}.json`)
    const obj = {[stationEng] : []}
    Object.assign(seoul.list, obj)
    saveJSON(`./src/data/${stationEng}.json`, seoul)
}

module.exports = makeJsonStation;