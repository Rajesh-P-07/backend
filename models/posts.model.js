const mongoose=require("mongoose");

const postschema=mongoose.Schema({
    "title":String,
    "body":String,
    "device":String
})

const PostModel=mongoose.model("posts",postschema);

module.exports={
    PostModel
}