const route = require("color-convert/route");
const express = require("express");
const userController = require("../controllers/userController");
// const postUserController = require("../controllers/postUserController");

const router = express.Router();

//GET Requests
router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);

//POST requests
router.post("/", userController.createUsers);

//PUT requests
router.put("/:id", userController.updateuser);

//DELETE requests
router.delete("/:id", userController.delUser);
router.delete("/", userController.delUsers);

module.exports = router;
