const express = require("express");
const router = express.Router();
const UserController = require("./../controllers/userController");
const UserService = require("./../services/userService");
const HobbyService = require("./../services/hobbyService");
const UserInstance = new UserController(new UserService(), new HobbyService());

router.get("/", function (req, res, next) {
  res.send("hola");
});

router.get("/user/:id", function (req, res, next) {
  UserInstance.getUserById(req, res);
});

router.post("/add", function (req, res, next) {
  UserInstance.postName(req, res);
});

router.post("/newuser", function (req, res, next) {
  UserInstance.createUser(req, res);
});

router.delete("/delete/:name", function (req, res, next) {
  UserInstance.deleteName(req, res);
});

module.exports = router;
