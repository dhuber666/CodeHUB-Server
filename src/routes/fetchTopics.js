const mongoose = require("mongoose");
const queries = require("../queries/index");

module.exports = function(app) {
  app.get("/fetchTopics", (req, res) => {
    queries.fetchTopics().then(topics => res.send(topics));
  });
};
