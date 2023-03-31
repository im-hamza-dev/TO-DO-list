const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users-controller");

router.get("/users", UsersController.getUsers);

router.post("/signup", UsersController.createUsers);

module.exports = router;
