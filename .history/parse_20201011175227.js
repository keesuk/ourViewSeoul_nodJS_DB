const { parse, stringify } = require('svgson')
const fs = require('fs');
const {svg} = require('./map.svg')

parse(`${svg}`).then(json => {
    const mysvg = JSON.stringify(json, null, 4)
    fs.writeFileSync('./map.json', mysvg)
})