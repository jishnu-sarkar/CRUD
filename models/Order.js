"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User);
      models.User.hasMany(Order);
    }
  }

  Order.getOrder = function (id) {
    return this.findAll({
      where: {
        userId: id,
      },
    });
  };

  Order.getOrders = function () {
    return this.findAll({});
  };

  Order.createOrder = function (val) {
    return this.create({ ...val });
  };

  Order.updateOrder = function (updated_val, id) {
    this.update({});
  };

  Order.init(
    {
      prodName: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
