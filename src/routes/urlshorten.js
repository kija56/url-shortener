const mongoose = require("mongoose");
const shortid = require('shortid');
const UrlShorten = require("../models/UrlShorten.js");
module.exports = app => {
  //GET API for redirecting to Original URL
  app.get("/api/item/:code", async (req, res) => {
   const urlData=await UrlShorten.findOne({urlCode:req.params.code});
   return res.status(200).json({"success":true,
   "originalUrl":urlData.originalUrl
  })
  });
  //POST API for creating short url from Original URL
  app.post("/api/item", async (req, res) => {
    const urlCode=shortid.generate();
    const urlData = {...req.body,urlCode };
      const data=await UrlShorten.create(urlData);
      return res.status(200).json({"success":true, data});
      
  });
};