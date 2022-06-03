'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('subrecipes-utensils', [{
            subRecipeId: 7,
            utensilId: 6,
          },
          {
            subRecipeId: 8,
            utensilId: 1,
          },
          {
            subRecipeId: 9,
            utensilId: 9,
          },], {});
      },
    
    async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('subrecipes-utensils', null, {});
    }
};