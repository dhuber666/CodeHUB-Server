const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const replySchema = require("./replySchema");

const postSchema = new Schema({
    title: String,
    content: String,
    topic: { type: Schema.Types.ObjectId, ref: "topic"},
    replies: [replySchema]

})

const Post = mongoose.model("post", postSchema);

module.exports = Post;