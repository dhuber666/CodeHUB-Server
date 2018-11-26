const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const replySchema = new Schema({
    content: String,
    createdAt: { type: Date, default: Date.now},
    user: String

})

module.exports = replySchema;