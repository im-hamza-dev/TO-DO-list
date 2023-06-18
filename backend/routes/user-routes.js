const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users-controller");

router.get("/", UsersController.getUsers);
router.get("/login", UsersController.login);
router.post("/signup", UsersController.createUsers);

module.exports = router;
