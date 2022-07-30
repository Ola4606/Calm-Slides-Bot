const ImageModel = require("../models/image.js");



async function uploadAllImageData (imageData) {
  
    for(var i = 0; i < imageData.length; i++) {
        const image = new ImageModel({
            imageUnsplashID: imageData[i]["id"],
              url: imageData[i]["urls"]["raw"],
              downloadUrl: imageData[i]["links"]["download"],
              blurHash: imageData[i]["blur_hash"],
              unsplashImagePage: imageData[i]["links"]["html"],
              snapersCountry: imageData[i]["location"]["country"],
              snapersName: imageData[i]["user"]["name"],
              snapersUnsplashPortfolio: imageData[i]["user"]["links"]["html"],
           });

        await image.save().then(() => console.log('Thank GOD, all went well'));
    }

    return true;




   
}

module.exports = uploadAllImageData;