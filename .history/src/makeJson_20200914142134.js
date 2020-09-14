const fs = require('fs')

function loadJSON(filename = '') {
    return fs.existsSync(filename)
    ? fs.readFileSync(filename).toString()
    : ''
}

console.log(
    JSON.parse(
        fs.readFileSync('seoul.json').toString()
    )
)