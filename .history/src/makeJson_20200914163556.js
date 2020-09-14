const fs = require('fs');
const path = require("path");

function makeJson({stationEng, imgName, imgTag, points}) {

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

    const seoul = loadJSON('./data/seoul.json')  
    seoul.push(stationEng)

    saveJSON('./data/seoul.json', seoul)
}

module.exports = makeJson;