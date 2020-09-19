const fs = require('fs');

function creatJson(stationEng) {

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

    let obj = {
        "list" : [],
    };
    let data = JSON.stringify(obj, null, 2);

    const seoul = loadJSON('./src/data/seoul.json')
    const obj = { "list" : [] }
    saveJSON('./src/data/seoul.json', seoul)
}

module.exports = creatJson;