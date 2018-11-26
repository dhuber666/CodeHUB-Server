const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const topicSchema = new Schema({
    title: String,
    subTitle: String,
    posts: [{ type: Schema.Types.ObjectId, ref: "post"}],
    topicGroup: { type: Schema.Types.ObjectId, ref: "topicGroup"}

})

const Topic = mongoose.model("topic", topicSchema);

module.exports = Topic;