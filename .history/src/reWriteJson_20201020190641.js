const fs = require('fs');

function reWriteJson({stationKor, stationEng, imgName, imgTag, points}) {

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

    const seoul = loadJSON('./src/data/JSON/'+ stationEng +'.json')
    seoul.list.push({
        "station" : stationKor,
        "location" : stationEng,
        "locationName" : imgName,
        "locationTag" : imgTag,
        "locationData" : Object.values(points)
    })
    saveJSON('./src/data/'+ stationEng +'.json', seoul)
    console.log(`${stationEng}, ${imgName}, ${imgTag}, done`)
}

module.exports = reWriteJson;