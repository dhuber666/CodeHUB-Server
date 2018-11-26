const mongoose = require("mongoose");
const queries = require("../queries/index");

module.exports = function(app) {
  app.get("/fetchTopicGroups", (req, res) => {
    queries.fetchTopicGroups().then(topicGroups => res.send(topicGroups));
  });
};
