const csv = require('csv-parser')
const fs = require('fs');
const path = require("path");


async function filter(preImgTag){

    let dirNow = path.dirname(require.main.filename);
    let filterData = [];
    let imgTag = preImgTag.replace(",", "");
    let imgTagID

    await fs.createReadStream(dirNow + "/src/data/seoulCategory.csv")
    .pipe(csv())
    .on('data', function(csvrow) {
        filterData.push(csvrow)
    })
    .on('end', function() {
        let tag = filterData.find(x => x.category === imgTag)
        imgTagID = tag.id
    })

    await console.log( imgTagID )
}

module.exports = filter;