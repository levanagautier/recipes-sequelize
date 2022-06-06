const models = require('../models');

const getAllRecipes = async (req, res) => {
    try {
        const Recipes = await models.Recipes.findAll({
            include: [
                {
                    model : models.SubRecipes,
                    as: "SubRecipes",
                    through: {
                        attributes : []
                    },
                    include: [
                        {
                            model : models.Ingredients,
                            as: "Ingredient",
                            through: {
                                attributes : []
                            },
                        },
                        {
                            model : models.Utensils,
                            as: "Utensil",
                            through: {
                                attributes : []
                            },
                        }
                    ]
                },
                
            ]
        });
        res.send(Recipes)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const getRecipe = async (req, res) => {
    try {
        const Recipe = await models.Recipes.findByPk(req.params.id, { attributes: ['id', 'name']})
        res.send(Recipe)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const insertRecipe = async (req, res) => {
    try {
        const newRecipe = await models.Recipes.create(req.body);
        res.json(newRecipe)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const updateRecipe = async (req, res) => {
    try {
        let id = Number(req.params.id);
        if (isNaN(id)) res.status(400).json("id mal formaté")
        await models.Recipes.update(req.body, { where: { id: req.params.id } })
        res.status(200).json({ message: "Resource has been updated" })
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const deleteRecipe = async (req, res) => {
    try {
        await models.Recipes.destroy({ where: { id : req.params.id}})
        res.status(200).json({ message: "Recipe has been deleted." })
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}


module.exports = {
    getAllRecipes,
    getRecipe,
    insertRecipe,
    updateRecipe,
    deleteRecipe
};
  