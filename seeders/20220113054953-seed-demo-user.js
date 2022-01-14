"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Users", [
      {
        firstName: "Jishnu",
        lastName: "Sarkar",
        email: "jishnu.sarkar@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Jaya",
        lastName: "Sarkar",
        email: "jaya.sarkar@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
