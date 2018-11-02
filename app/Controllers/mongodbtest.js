module.exports = (req, res) => {

}



const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
});
const BlogPostModel = mongoose.model('BlogPostendings', BlogPost);

const m = new BlogPostModel({
    title: "asdsgsd____d",
    body: "sdjklfhsjkdgdiogdfjkghfjkdghfjkddffdhdfd",

});
m.save();


console.log("sdjkdsjk")
