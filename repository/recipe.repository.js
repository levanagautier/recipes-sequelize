const { Recipes } = require('../models');

module.exports = (db) => {
    const getLastRecipes = () => {
        console.log(Recipes)
        try {
            const recipes = await models.Recipes.findAll().sort({ updatedAt: -1}).limit(4);
            return res.status(200).json({ recipes });
        } catch(error) {
            return res.status(500).send(error.message);
        }
    }

    const getAllRecipes = async(req, res) => {
        try {
            const recipes = await models.Recipes.findAll({
                include: [
                    {
                        model: models.SubRecipe,
                        as: 'subrecipe'
                    }
                ]
            });
            return res.status(200).json({ recipes });
        } catch(error) {
            return res.status(500).send(error.message);
        }
    }

    return Object.create({
        getLastRecipes,
        getAllRecipes
    })
}
  