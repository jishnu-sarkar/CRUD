const express = require("express");
const orderController = require("../controllers/orderController");

const router = express.Router();

//GET requests for view data
router.get("/", orderController.getOrders);
router.get("/:id", orderController.getOrder);

//POST requests for insert data
router.post("/:id", orderController.createOrder);

//PUT requests for update data
router.put("/:id", orderController.updateOrder);

module.exports = router;
