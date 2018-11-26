const express = require("express");
const app = express();
const addTopicGroup = require("./src/routes/addTopicGroup");
const addTopic = require("./src/routes/addTopic");
const fetchTopicGroup = require("./src/routes/fetchTopicGroups");
const fetchTopics = require("./src/routes/fetchTopics");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").load();

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  // Set custom headers for CORS
  res.header(
    "Access-Control-Allow-Headers",
    "Content-type,Accept,X-Custom-Header"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  return next();
});

addTopicGroup(app);
fetchTopicGroup(app);
fetchTopics(app);
addTopic(app);

// TODO: Add authentication

// your mlab or mongodb cloud URI here:
mongoose.connect(
  process.env.MLAB_URI,
  { useNewUrlParser: true }
);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("Server listening on Port ", PORT);
});
