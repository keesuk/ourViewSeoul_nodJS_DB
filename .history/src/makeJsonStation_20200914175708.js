const fs = require('fs');

function makeJsonStation(stationEng) {

    function saveJSON(filename = '', json = '""') {
        return fs.writeFile(
            filename, 
            function(err, result) {
                if(err) console.log('error', err);
            })
    }
    
    let obj = {[stationEng]: [] }
    obj[stationEng].push({
        "location" : "stationEng",
        "lcoationName" : "imgName",
        "locationTag" : "imgTag",
        "locationData" : "pointsArr"
    })
    let json = JSON.stringify(obj)
    console.log(json)
    saveJSON('./src/data/seoul.json', json)
}

module.exports = makeJsonStation;