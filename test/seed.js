const Forum = require("../src/model/forum");
const Post = require("../src/model/post");
const Topic = require("../src/model/topic");
const TopicGroup = require("../src/model/topicGroup");

const forum = new Forum({
    title: "codeHUB",
    
})



const topic = new Topic({
    title: "Javascript",
    subTitle: "Search for a Javascript Fellow",
    
})

const topicGroups = [
    new TopicGroup({
        title: "Coding Partner Search",
        subTitle: "Search for your coding partner in a specific language",
        topics: [topic]
    }),
    new TopicGroup({
        title: "General Discussion",
        subTitle: "Discuss about your favorite coding language",
        topics: [topic]
    })
]

const post = new Post({
    title: "I'm looking for a partner to build a little Todo app with JS and Node",
    content: "Hi, my name is Erik. I'm looking for you!",
    
})

forum.topicGroups = topicGroups;
topic.topicGroup = topicGroup;
topic.posts.push(post);
post.topic = topic;

function seedDB() {

    return Promise.all([forum.save(), topicGroup.save(), topic.save(), post.save()])
       
}



module.exports = seedDB