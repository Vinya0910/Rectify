const { application } = require("express");
const mongoose = require("mongoose");
const recipeSchema = new mongoose.Schema({
    title :{
        type: String,
        required : true
    },
    name :{
        type: String,
        required: true
    }
})
const Recipe = mongoose.model("Recipe",recipeSchema);
module.exports = Recipe;

app.post("/recipe", async(req , res)=>{
    try{
 const { title,name} = req.body;
 const recipe = new Recipe({
    title,
    name
 });
 const saveRecipe = await recipe.save();
 res.status(200).json(saveRecipe);
    }
    catch(error){
res.status(500).json({
    message:"Error creating"
});
    }
});

//