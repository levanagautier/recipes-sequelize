const models = require('../models');

const homepage = async (req, res) => {
  try {
    const lastRecipesList = await models.Recipes.findAll({
        include: [
            {
                model: models.SubRecipe,
                as: 'subrecipe'
            }
        ]
    }).sort({ updatedAt: -1}).limit(4);
    return res.status(201).json({
        lastRecipesList,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

// const homepage = async (req, res) => {
//     try {
//         const lastRecipesList = await this.getLastRecipes();
//         console.log('lastRecipesList', lastRecipesList);
//         res.render('main/layout', { 
//             template: 'homepage',
//             recipes: lastRecipesList
//         })
//     } catch(error) {}
// }

module.exports = {
    homepage,
}

