const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const Recipe = require("./models/Recipe");
const app = express ();
 app.use(cors());
 app.use(express.json());

 const PORT = process.env.PORT || 5000;
  mongoose
  .connect(process.env.MONGO_URI)
  .then(()=>{
    console.log("Mongo db");
  })
  .catch((error) =>{
console.log("connection failed",error);
  });
  
  app.listen(PORT,()=>{
    console.log("server running");
  });