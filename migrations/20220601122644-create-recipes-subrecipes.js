'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('recipes-subrecipes', {
      recipeId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
            model: 'Recipes',
            key: 'id',
        },
        onDelete: 'CASCADE'
      },
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
      stepOrder: {
        allowNull: false,
        type: Sequelize.TINYINT(2),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('recipes-subrecipes');
  }
};