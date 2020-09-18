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
    obj.list.push({
        [stationEng] : [],
    })
    saveJSON('./src/data/seoul.json', obj)
}

module.exports = makeJsonStation;