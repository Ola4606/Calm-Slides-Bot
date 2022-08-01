//calm slides bot
const getUnsplashImages = require("./functions/unsplash.js");
const uploadAllImageData = require("./functions/mongodb.js");
const schedule = require('node-schedule');

const mongoose = require("mongoose");
require('dotenv').config();



async function main () {
    
    if(mongoose.connection.readyState !== 1) {

        await mongoose.connect(process.env.MONGODB_URL)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    });


    }
    
    

    
    const imagesData = await getUnsplashImages();

    if(imagesData) {

        await uploadAllImageData(imagesData);
        return true;

    }


}

schedule.scheduleJob('*/2 * * * *', async () => {
    await main();
  });




