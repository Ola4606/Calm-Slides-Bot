const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema(
  {
    imageUnsplashID: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    downloadUrl: {
      type: String,
      required: true,
    },
    blurHash: {
      type: String | null,
      required: false,
    },
    unsplashImagePage: {
      type: String,
      required: true,
    },
    snapersCountry: {
      type: String | null,
      required: false,
    },
    snapersName: {
      type: String,
      required: true,
    },
    snapersUnsplashPortfolio: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ImageModel = mongoose.model('image', imageSchema);
module.exports = ImageModel;
