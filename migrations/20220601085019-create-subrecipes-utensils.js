'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('subrecipes-utensils', {
      subRecipeId: {
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
            model: 'SubRecipes',
            key: 'id',
        },
        onDelete: 'CASCADE'
      },
      utensilId: {
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
            model: 'Utensils',
            key: 'id',
        },
        onDelete: 'CASCADE',
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('subrecipes-utensils');
  }
};