const fs = require('fs');
const path = require("path");

function makeJson({imgName, imgTag, points}) {

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
    let obj = {
        [stationName] : []
    }

    obj[stationName].push({locationName: imgName, locationTag: imgTag, locationData: points})
    let json =


    saveJSON('./data/seoul.json', seoul)

}

module.exports = makeJson;