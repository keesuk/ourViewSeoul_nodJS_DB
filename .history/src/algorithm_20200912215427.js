const pixelUtil = require('pixel-util');
const Canvas = require('canvas');
const fs = require('fs');

function algorithm(){
    var image = new Canvas.Image;

    pixelUtil.createBuffer('http://127.0.0.1:8080/image/test.jpg').then(function(buffer){
        image.src = buffer;

        canvas = new Canvas(image.width, image.height);

        var ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0);
        runImage(ctx.getImageData(0, 0, canvas.width, canvas.height));
    });
}

module.exports = algorithm;