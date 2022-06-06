'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('subrecipes-ingredients', [{
            subRecipeId: 1,
            ingredientId: 2,
            qty: 200,
            unit: 'g',
            prepNotes: ''
          },
          {
            subRecipeId: 2,
            ingredientId: 3,
            qty: 250,
            unit: 'g',
            prepNotes: 'room temp'
          },
          {
            subRecipeId: 3,
            ingredientId: 1,
            qty: 300,
            unit: 'g',
            prepNotes: 'sifted'
          }], {});
      },
    
    async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('subrecipes-ingredients', null, {});
    }
};