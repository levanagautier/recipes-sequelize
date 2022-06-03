const express = require('express');
const appRouter = express.Router();
// const { homepage } = require('../controllers/recipe.controller.js')
const controllers = require('../controllers');



appRouter.get('/home', controllers.homepage)
// appRouter.post('/search', searchInRecipes)
// appRouter.get('/articles', allRecipes)


module.exports = {
    appRouter
}
