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

    const seoul = loadJSON('seoul.json')

    ;['d', 'e', 'f'].forEach(letter =>
        seoul.files.push(letter)
    )

    saveJSON('seoul.json', seoul)

}

module.exports = makeJson;