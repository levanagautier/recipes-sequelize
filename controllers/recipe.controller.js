const { Recipes } = require('../models/recipe')

const homepage = async (req, res) => {
    try {
        const lastRecipesList = await this.getLastRecipes();
        console.log('lastRecipesList', lastRecipesList);
        res.render('main/layout', { 
            template: 'homepage',
            recipes: lastRecipesList
        })
    } catch(error) {}
}

const recipeController = module.exports = {
    homepage
};
  