'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('recipes-subrecipes', [{
            recipeId: 1,
            subRecipeId: 2,
            stepOrder: 3
          },
          {
            recipeId: 2,
            subRecipeId: 3,
            stepOrder: 2
          },
          {
            recipeId: 2,
            subRecipeId: 1,
            stepOrder: 1
          }], {});
      },
    
    async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('recipes-subrecipes', null, {});
    }
};
