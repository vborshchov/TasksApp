const Task = require("../models/task.model");

exports.task_create = async (req, res, next) => {
    let task = new Task({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const newTask = task.save().exec();
        res.send(newTask);
    } catch (err) {
        return next(err);
    }
};

exports.task_get_all = async (req, res, next) => {
    try {
        const task = await Task.find({}).exec();
        res.send(task);
    } catch (err) {
        return next(err);
    }
};

exports.task_show = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id).exec();
        res.send(task);
    } catch (err) {
        return next(err);
    }
};

exports.task_update = async (req, res, next) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true }
        ).exec();
        res.send(task);
    } catch (err) {
        return next(err);
    }
};

exports.task_delete = async (req, res, next) => {
    try {
        await Task.findByIdAndRemove(req.params.id).exec();
        res.send("Deleted successfully!");
    } catch (err) {
        return next(err);
    }
};
