const csv = require('csv-parser')
const fs = require('fs');
const path = require("path");
var csvWriter = require('csv-write-stream')


function filtering(filterData, imgTag, dirNow) {

    let writer = csvWriter()

    let imgtag = filterData.find(x => x.category === imgTag)

    if(imgtag !== undefined){return imgtag}
    else { 
        return new Promise((resolve, reject) => {
            writer.pipe(fs.createWriteStream(dirNow + "/src/data/seoulFilterTODO.csv", {flags: 'a'}))
            writer.write({imgTag});
            writer.end();
        }).then(() => {return {id:1}})

    }

}

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
            let tag = filtering(filterData, imgTag, dirNow)

            console.log(tag)
            let imgTagID = Number(tag.id)
            
            resolve(imgTagID)
        })
    })
}

module.exports = filter;


