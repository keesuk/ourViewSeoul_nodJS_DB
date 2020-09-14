const fs = require('fs')

function loadJSON(filename = '') {
    return JSON.parse(
        fs.existsSync(filename)
            ? fs.readFileSync(filename).toString()
            : '""'
    )
}

console.log(
    loadJSON('seoul.json')
)