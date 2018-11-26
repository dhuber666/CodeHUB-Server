const mongoose = require("mongoose");

const Post = require("../model/post");
const Topic = require("../model/topic");
const TopicGroup = require("../model/topicGroup");

const queries = {
  addTopicGroup: function(title, subTitle) {
    topicGroup = new TopicGroup({
      title,
      subTitle
    });
    return topicGroup.save();
  },
  fetchTopicGroups: function() {
    return TopicGroup.find({}).populate("topics");
  },
  fetchTopics: function() {
    return Topic.find({})
      .populate("posts")
      .populate("topicGroup");
  },
  addTopic: function(topicGroupID, title, subTitle) {
    const topic = new Topic({
      title,
      subTitle,
      topicGroup: topicGroupID
    });

    return topic.save().then(() => {
      return TopicGroup.findById(topicGroupID).then(topicGroup => {
        topicGroup.topics.push(topic);
        return topicGroup.save().then(() => topic);
      });
    });
  }
};

// TODO: Add new topic to a topic group.

module.exports = queries;
