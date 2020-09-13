const image = require('get-image-data')
const fs = require('fs');

function algorithm(){
    image('./image.png', function (err, info) {
        var data = info.data
        var height = info.height
        var width = info.width
        console.log(height)
        console.log(width)
       
        for (var i = 0, l = data.length; i < l; i += 4) {
          var red = data[i]
          var green = data[i + 1]
          var blue = data[i + 2]
          var alpha = data[i + 3]
        }
      })      
}
algorithm();

module.exports = algorithm;