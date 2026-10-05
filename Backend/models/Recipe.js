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