'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('subrecipes-tags', [{
            subRecipeId: 7,
            tagId: 8,
          },
          {
            subRecipeId: 7,
            tagId: 9,
          },
          {
            subRecipeId: 8,
            tagId: 7,
          },
          {
            subRecipeId: 9,
            tagId: 8,
          },
          {
            subRecipeId: 9,
            tagId: 9,
          }], {});
      },
    
    async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('subrecipes-tags', null, {});
    }
};