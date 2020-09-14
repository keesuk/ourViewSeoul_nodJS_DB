const fs = require('fs')

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

console.log(
    loadJSON('seoul.json')
)

const seoul = loadJSON('seoul.json')

seoul.push(4)

saveJSON('seoul.json', seoul)