
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const seed = require("./seed")

before(done => {
    mongoose.connect("mongodb://root:atiradeon9200se@ds221339.mlab.com:21339/clicker", { useNewUrlParser: true });
    mongoose.connection
        .once("open", () => {done()})
        .on("error", error => {
            console.warn("error", error)
        })
})



before(done => {

    const { forums, posts, topics, topicgroups } = mongoose.connection.collections;

    posts.drop(() => {
        topics.drop(() => {
            topicgroups.drop(() => {
                forums.drop(() => {
                    console.log("every collection gets dropped")
                    done();
                    
                })
            })
        })
    })
})