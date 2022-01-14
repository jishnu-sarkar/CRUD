"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  User.getUser = function (id) {
    return this.findByPk(id);
  };

  User.getUsers = function () {
    return this.findAll({});
  };

  User.createUser = function (val) {
    return this.create({
      ...val,
    });
  };

  User.updateUser = function (updated_val, id) {
    return this.update(
      {
        ...updated_val,
      },
      {
        where: {
          id: id,
        },
      }
    );
  };

  User.deleteUser = function (id) {
    return this.destroy({
      where: {
        id: id,
      },
    });
  };

  User.deleteUsers = function () {
    return this.destroy();
  };

  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
