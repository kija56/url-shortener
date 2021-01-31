const mongoose = require('mongoose');

const UrlShortenSchema = new mongoose.Schema({
  
  originalUrl: {
    type: String,
    required: "URL is required!"
  },
shortUrl: {
    type: String,
    required: "URL is required!"
  },
  urlCode: {
    type: String,
    required: "URL is required!"
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('UrlShorten', UrlShortenSchema);