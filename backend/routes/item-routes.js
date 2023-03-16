const express = require("express");
const router = express.Router();
const ItemsController = require("../controllers/items-controller");

router.get("/todoItems", ItemsController.getItems);

router.post("/todoItem", ItemsController.createItems);

module.exports = router;
