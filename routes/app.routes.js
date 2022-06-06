const express = require('express');
const appRouter = express.Router();
// const { homepage } = require('../controllers/recipe.controller.js')
const controllers = require('../controllers');

appRouter.get('/home', controllers.homepage)

appRouter
    .route('/recipes')
    .get(controllers.getAllRecipes)
    .post(controllers.insertRecipe)

appRouter
    .route('/recipes/:id')
    .get(controllers.getRecipe)
    .put(controllers.updateRecipe)
    .delete(controllers.deleteRecipe)

appRouter
    .route('/subrecipes')
    .get(controllers.getAllSubRecipes)
    .post(controllers.insertSubRecipe)

appRouter
    .route('/subrecipes/:id')
    .get(controllers.getSubRecipe)
    .put(controllers.updateSubRecipe)
    .delete(controllers.deleteSubRecipe)

appRouter
    .route('/ingredients')
    .get(controllers.getAllIngredients)
    .post(controllers.insertIngredient)

appRouter
    .route('/ingredients/:id')
    .get(controllers.getIngredient)
    .put(controllers.updateIngredient)
    .delete(controllers.deleteIngredient)

appRouter
    .route('/utensils')
    .get(controllers.getAllUtensils)
    .post(controllers.insertUtensil)

appRouter
    .route('/utensils/:id')
    .get(controllers.getUtensil)
    .put(controllers.updateUtensil)
    .delete(controllers.deleteUtensil)
    
appRouter
    .route('/tags')
    .get(controllers.getAllTags)
    .post(controllers.insertTag)

appRouter
    .route('/tags/:id')
    .get(controllers.getUtensil)
    .put(controllers.updateTag)
    .delete(controllers.deleteTag)


module.exports = appRouter
