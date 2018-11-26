const mongoose = require("mongoose");
const queries = require("../queries/index");

module.exports = function(app) {
  app.post("/createPost", (req, res) => {
    const { id, title, content } = req.body;

    queries
      .addPost(id, title, content)
      .then(createdPost => {
        console.log(createdPost);
        res.send(createdPost);
      })
      .catch(error => console.log(error));
  });

  app.get("/fetchPosts", (req, res) => {
    queries.fetchPosts().then(posts => {
      console.log(posts);
      res.send(posts);
    });
  });

  app.get("/fetchPostsWithTopicID", (req, res) => {
    const { topicID } = req.query;

    queries.fetchPostsWithTopicID(topicID).then(posts => {
      res.send(posts);
    });
  });
};
