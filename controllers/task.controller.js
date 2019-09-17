const Task = require("../models/task.model");

exports.task_create = function(req, res, next) {
  let task = new Task({
    title: req.body.title,
    description: req.body.description
  });

  task.save(function(err, task) {
    if (err) {
      return next(err);
    }
    res.send(task);
  });
};

exports.task_get_all = function(req, res) {
    Task.find({}, (err, tasks) => {
        res.send(tasks);
    });
};

exports.task_show = function(req, res, next) {
  Task.findById(req.params.id, function(err, task) {
    if (err) return next(err);
    res.send(task);
  });
};

exports.task_update = function(req, res) {
  Task.findByIdAndUpdate(req.params.id, { $set: req.body }, function( err, task ) {
    if (err) return next(err);
    res.send(task);
  });
};

exports.task_delete = function(req, res) {
  Task.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
};