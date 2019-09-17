const express = require("express");
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const task_controller = require("../controllers/task.controller");

router.get("/", task_controller.task_get_all);
router.post("/", task_controller.task_create);
router.get("/:id", task_controller.task_show);
router.put("/:id", task_controller.task_update);
router.delete("/:id", task_controller.task_delete);
module.exports = router;
