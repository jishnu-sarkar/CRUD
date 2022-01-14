const lodash = require("lodash");
const db = require("../models");

//Display all orders for all users
const getOrders = async (req, res) => {
  const result = db.sequelize.models.Order.getOrders();
  if (!lodash.isEmpty(result)) {
    res.status(202).json({ result });
  } else {
    res.status(404).json({ message: "No Data Found!" });
  }
};

//Display all orders for a particular user
const getOrder = async (req, res) => {
  const id = req.params.id;
  const result = db.sequelize.models.Order.getOrder(id);
};

//Create orders for particular users
const createOrder = async (req, res) => {
  const result = db.sequelize.models.Order.createOrder();
};

//Update order details of a particular user
const updateOrder = async (req, res) => {
  const result = db.sequelize.models.Order.updateOrder();
};

module.exports = {
  getOrders: getOrders,
  getOrder: getOrder,
  createOrder: createOrder,
  updateOrder: updateOrder,
};
