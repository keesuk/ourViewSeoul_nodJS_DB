const fs = require('fs');
const path = require("path");

function makeJson({stationEng, imgName, imgTag, pointsArr}) {

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

    const seoul = loadJSON('./data/seoul.json')
    

    saveJSON('./data/seoul.json', seoul)

}

module.exports = makeJson;