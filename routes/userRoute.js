const route = require("color-convert/route");
const express = require("express");
const userController = require("../controllers/userController");
// const postUserController = require("../controllers/postUserController");

const router = express.Router();
//GET Requests

router.get("/", userController.get_Users);

router.get("/:id", userController.get_User);

//POST requests

router.post("/", userController.createUsers);

//PUT requests

router.put("/:id", userController.update_user);

//DELETE requests
router.delete("/:id", userController.del_Users);

module.exports = router;
