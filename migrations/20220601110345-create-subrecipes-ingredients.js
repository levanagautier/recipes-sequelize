'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('subrecipes-ingredients', {
      subRecipeId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
            model: 'SubRecipes',
            key: 'id',
        },
        onDelete: 'CASCADE'
      },
      ingredientId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
            model: 'Ingredients',
            key: 'id',
        },
        onDelete: 'CASCADE',
      },
      qty: {
        type: Sequelize.FLOAT
      },
      unit: {
        allowNull: false,
        type: Sequelize.ENUM('','g','mg','l','cl','ml')
      },
      prepNotes: {
        type: Sequelize.STRING(255)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('subrecipes-ingredients');
  }
};