const fs = require('fs')

function loadJSON(filename = '') {
    return JSON.parse(
        fs.existsSync(filename)
            ? fs.readFileSync(filename).toString()
            : '""'
    )
}

function saveJSON(json = '""') {
    return fs.writeFileSync(filename, JSON.stringify(json))
}

console.log(
    loadJSON('seoul.json')
)