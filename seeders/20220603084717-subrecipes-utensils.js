'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('subrecipes-utensils', [{
            subRecipeId: 1,
            utensilId: 7,
          },
          {
            subRecipeId: 2,
            utensilId: 1,
          },
          {
            subRecipeId: 3,
            utensilId: 8,
          },], {});
      },
    
    async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('subrecipes-utensils', null, {});
    }
};