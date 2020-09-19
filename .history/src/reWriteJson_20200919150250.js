const fs = require('fs');

function reWriteJson({stationEng, imgName, imgTag, points}) {

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

    const seoul = loadJSON('./src/data/'+ stationEng +'.json')
    seoul.list.push({
        "location" : stationEng,
        "lcoationName" : imgName,
        "locationTag" : imgTag,
        "locationData" : Object.values(points)
    })
    saveJSON('./src/data/'+ stationEng +'.json', seoul)
    console.log(`${stationEng}, ${imgName}, ${imgTag} json, done`)
}

module.exports = reWriteJson;