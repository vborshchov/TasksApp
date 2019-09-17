const Task = require("../models/task.model");

exports.task_create = function(req, res, next) {
  let task = new Task({
    title: req.body.title,
    description: req.body.description
  });

  task.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Task Created successfully");
  });
};