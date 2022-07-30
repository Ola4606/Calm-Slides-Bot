const createApiObject = require("unsplash-js");
const nodeFetch = require('node-fetch');

async function getUnsplashImages() { //every 10mins

  const imgCount = 6;
  const  {createApi} = createApiObject;

  // creating instance
  const unsplash = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY,
    fetch: nodeFetch,
  });

  // console.log('started getting images');

  const imagesData = await unsplash.photos.getRandom({
    count: imgCount,
  }).then(result => {
    if (result.errors) {
      // handle error here
      console.log('error occurred: ', result.errors[0]);
      return null;
    } else {
      const feed = result.response;

      // console.log('gotten images');
      // console.log(feed);
  
      // handle success here
      return feed;
      
    }
  });

  return imagesData;
}

module.exports = getUnsplashImages;



