const express = require("express");
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const task_controller = require("../controllers/task.controller");

router.post("/", task_controller.task_create);
router.get("/:id", task_controller.task_show);
module.exports = router;
