const csv = require('csv-parser')
const fs = require('fs');
const path = require("path");


async function filter(preImgTag){

    let dirNow = await path.dirname(require.main.filename);
    let filterData = await [];
    let imgTag = await preImgTag.replace(",", "");

    await fs.createReadStream(dirNow + "/src/data/seoulCategory.csv")
    .pipe(csv())
    .on('data', function(csvrow) {
        filterData.push(csvrow)
    })
    .on('end', function() {
        let tag = filterData.find(x => x.category === imgTag)
        let imgTagID = tag.id
        
        return imgTagID
    })
}

module.exports = filter;