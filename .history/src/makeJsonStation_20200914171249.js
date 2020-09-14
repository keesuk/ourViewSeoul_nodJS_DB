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
                3
            ))
    }

    const seoul = loadJSON('./src/data/seoul.json')
    const obj = {
        [stationEng] : []
    }
    seoul.push(obj)
    saveJSON('./src/data/seoul.json', seoul)
}

module.exports = makeJsonStation;