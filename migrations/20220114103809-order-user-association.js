"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint("Orders", {
      fields: ["userId"],
      type: "foreign key",
      name: "order-user-association",
      references: {
        table: "Users",
        field: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint("Orders", {
      fields: ["userId"],
      type: "foreign key",
      name: "order-user-association",
      references: {
        table: "Users",
        field: "id",
      },
    });
  },
};
