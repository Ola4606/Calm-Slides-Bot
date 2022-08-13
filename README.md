# CalmSlides Bot
## Bot

![MongoDB Collection of Images Data stored by the CalmSlides bot](https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/CalmSlides%20Bot%2F1.png?alt=media "MongoDB Collection of Images Data stored by the CalmSlides bot")

This bot was built using NodeJS, and it simply makes a request to the Unsplash API every 2mins _(using the node-schedule NPM package)_ to receive data on 30 images.

**Why I created this bot?** I created this bot to solve a problem. I needed thousands of Unsplash images each time a user wanted to have a “relaxation session” on my other project “[CalmSlides](https://github.com/Ola4606/Calm-Slides-Website)”, and the Unsplash API _(in development mode)_ restricts the number of requests I can make to 50 requests per hour _(Note: in each request I can retrieve data on up to 30 images maximum)_ .

Hence to solve this problem I created a bot that made requests for all the image data I could need on the website beforehand, and store it on MongoDB, so I would not need to make an API call each time I needed the images on “CalmSlides”. The bot ran for 4 days, and stored data on 92,813 images, before I shut it down _(temporarily)_.

It uses the mongoose NPM package to connect to MongoDB and store data in the database.During this project, I learned how to store data in MongoDB by creating Schemas and Models.

**Key NPM Packages used:**  node-fetch, mongoose, node-schedule, unsplash-js, dotenv

**Read on more of my projects over on my website:** [Adeyemo OlaOluwa](https://laolu.netlify.app/)

