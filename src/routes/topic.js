const mongoose = require("mongoose");
const queries = require("../queries/index");

module.exports = function(app) {
  app.post("/createTopic", (req, res) => {
    const { id, title, subTitle } = req.body;
    console.log("props from addTopic", id, title, subTitle);
    queries
      .addTopic(id, title, subTitle)
      .then(createdTopic => res.send(createdTopic))
      .catch(error => console.log(error));
  });

  app.get("/fetchTopics", (req, res) => {
    queries.fetchTopics().then(topics => res.send(topics));
  });
};
