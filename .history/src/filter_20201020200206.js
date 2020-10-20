const csv = require('csv-parser')
const fs = require('fs');
const path = require("path");


function filter(preImgTag){

    let dirNow = path.dirname(require.main.filename);
    let filterData = [];
    let imgTag = preImgTag.replace(/,/g, "");
    console.log(imgTag)

    return new Promise((resolve, reject) => {
        let stream = fs.createReadStream(dirNow + "/src/data/seoulCategory.csv")
        .pipe(csv())

        stream.on('data', function(csvrow) {
            filterData.push(csvrow)
        })
        stream.on('end', function() {
            let tag = filterData.find(x => x.category === imgTag)
            let imgTagID = tag.id
            
            resolve(imgTagID)
        })
    })
}

module.exports = filter;