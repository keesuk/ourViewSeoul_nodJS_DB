const fs = require('fs');
const { data } = require('get-image-data');

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
    data.files.push(letter)
)

seoul.push(4)

saveJSON('seoul.json', seoul)