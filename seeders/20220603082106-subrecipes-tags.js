'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('subrecipes-tags', [{
            subRecipeId: 1,
            tagId: 2,
          },
          {
            subRecipeId: 3,
            tagId: 2,
          },
          {
            subRecipeId: 2,
            tagId: 1,
          },
          {
            subRecipeId: 3,
            tagId: 3,
          },
          {
            subRecipeId: 1,
            tagId: 3,
          }], {});
      },
    
    async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('subrecipes-tags', null, {});
    }
};