const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const topicGroupSchema = new Schema({
    title: String,
    subTitle: String,
    topics: [ { type: Schema.Types.ObjectId, ref: "topic"}]
})

const TopicGroup = mongoose.model("topicGroup", topicGroupSchema);

module.exports = TopicGroup;