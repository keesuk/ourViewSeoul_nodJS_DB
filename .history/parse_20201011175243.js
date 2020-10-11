const { parse, stringify } = require('svgson')
const fs = require('fs');

parse(`

`).then(json => {
    const mysvg = JSON.stringify(json, null, 4)
    fs.writeFileSync('./map.json', mysvg)
})