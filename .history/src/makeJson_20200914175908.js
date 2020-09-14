const fs = require('fs');

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

    const seoul = loadJSON('./src/data/seoul.json')
    const pointsArr = [];
    pointsArr.push(points)
    seoul[stationEng].push({
        "location" : stationEng,
        "lcoationName" : imgName,
        "locationTag" : imgTag,
        "locationData" : pointsArr
    })
    saveJSON('./src/data/seoul.json', seoul)
}

module.exports = makeJson;