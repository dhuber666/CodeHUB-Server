const assert = require("assert");

const seed = require("./seed");
const Forum = require("../src/model/forum");
const Post = require("../src/model/post");
const Topic = require("../src/model/topic");
const TopicGroup = require("../src/model/topicGroup");



describe("reading from the db", () => {

    before(done => {
        seed()
            .then(() => {
                console.log("collections are now created");
                done();
            })
    })
   
    
    it("can get all topicGroups", (done) => {
        Forum.findOne({ title: "codeHUB"})
            .populate("topicGroups")
            .then(forum => {
                console.log(forum.topicGroups.length)
                assert(forum.topicGroups.length === 1)
                done();
            })
    })

    it("can find the related topic to a post", (done) => {
        Post.find({})
            .populate("topic")
            .then(users =>{
                console.log(users[0].topic.title)
                assert(users[0].topic.title === "Javascript")
                done();
            })
    })

    it("can find the related topicGroup from a post", done => {
        Post.findOne({title: "I'm looking for a partner to build a little Todo app with JS and Node"})
        .populate({
            path: "topic",
            populate: { path: "topicGroup"}
        })
        .then(post =>{
            console.log("hellooooo", post.topic.topicGroup)
            done();
        })
    })
})