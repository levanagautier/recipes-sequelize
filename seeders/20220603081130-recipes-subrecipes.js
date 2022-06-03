'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('recipes-subrecipes', [{
            recipeId: 30,
            subRecipeId: 7,
            stepOrder: 3
          },
          {
            recipeId: 31,
            subRecipeId: 7,
            stepOrder: 3
          },
          {
            recipeId: 32,
            subRecipeId: 8,
            stepOrder: 3
          }], {});
      },
    
    async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('recipes-subrecipes', null, {});
    }
};
