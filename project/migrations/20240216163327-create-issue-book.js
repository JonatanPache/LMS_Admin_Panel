'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('IssueBooks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: "Categories"
          },
          key: "id"
        },
        allowNull: false
      },
      bookId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: "Books"
          },
          key: "id"
        },
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: "Users"
          },
          key: "id"
        },
        allowNull: false
      },
      days_issued: {
        type: Sequelize.INTEGER
      },
      issued_date: {
        type: Sequelize.DATE
      },
      is_returned: {
        type: Sequelize.ENUM
      },
      returned_date: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('IssueBooks');
  }
};