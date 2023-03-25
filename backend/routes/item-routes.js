const express = require("express");
const router = express.Router();
const ItemsController = require("../controllers/items-controller-old");

router.get("/todoItems", ItemsController.getTodoItems);

router.post("/todoItem", ItemsController.createTodoItems);

module.exports = router;
