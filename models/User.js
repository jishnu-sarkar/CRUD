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
  User.get_User = function (id) {
    return this.findByPk(id);
  };
  User.get_Users = function () {
    return this.findAll({});
  };
  User.put_User = function (val) {
    return this.create({
      ...val,
    });
  };
  User.update_User = function (updated_val, id) {
    return this.update(
      {
        email: updated_val.email,
      },
      {
        where: {
          id: id,
        },
      }
    );
  };
  User.delete_User = function (id) {
    return this.destroy({
      where: {
        id: id,
      },
    });
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
