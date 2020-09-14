const fs = require('fs');
const path = require("path");

function makeJson(points) {

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



    saveJSON('./data/seoul.json', seoul)

}

module.exports = makeJson;