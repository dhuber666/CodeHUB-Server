const mongoose = require("mongoose");
const queries = require("../queries/index");

module.exports = function(app) {
  app.post("/createTopicGroup", (req, res) => {
    const { title, subTitle } = req.body;
    queries.addTopicGroup(title, subTitle).then(data => res.send(data));
  });
};
