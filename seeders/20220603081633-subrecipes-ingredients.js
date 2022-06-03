'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('subrecipes-ingredients', [{
            subRecipeId: 7,
            ingredientId: 28,
            qty: 200,
            unit: 'g',
            prepNotes: ''
          },
          {
            subRecipeId: 8,
            ingredientId: 30,
            qty: 250,
            unit: 'g',
            prepNotes: 'room temp'
          },
          {
            subRecipeId: 9,
            ingredientId: 29,
            qty: 300,
            unit: 'g',
            prepNotes: 'sifted'
          }], {});
      },
    
    async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('subrecipes-ingredients', null, {});
    }
};