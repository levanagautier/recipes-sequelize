const models = require('../models');

const getAllRecipes = async (req, res) => {
  try {
    const Recipes = await models.Recipes.findAll({
      include: [
        {
          model: models.SubRecipes,
          as: 'SubRecipes',
          through: {
            attributes: [],
          },
          include: [
            {
              model: models.Ingredients,
              as: 'Ingredient',
              through: {
                attributes: [],
              },
            },
            {
              model: models.Utensils,
              as: 'Utensil',
              through: {
                attributes: [],
              },
            },
          ],
        },
      ],
    });
    res.send(Recipes);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getRecipe = async (req, res) => {
  const { id } = req.params;
  try {
    const Recipe = await models.Recipes.findOne({
      include: [
        {
          model: models.SubRecipes,
          as: 'SubRecipes',
          through: {
            attributes: [],
          },
          include: [
            {
              model: models.Ingredients,
              as: 'Ingredient',
              through: {
                attributes: ['subrecipeId', 'qty', 'unit', 'prepNotes'],
              },
            },
            {
              model: models.Utensils,
              as: 'Utensil',
            },
          ],
        },
      ],
      where: {
        id,
      },
    });
    // const Recipe = await models.Recipes.findByPk(req.params.id, {
    //     attributes: ['id', 'title'],
    //     include: [
    //         {
    //             model : models.SubRecipes,
    //             as: "SubRecipes",
    //             through: {
    //                 attributes : ['id', 'subRecipeId', 'recipeId']
    //             },
    //             include: [
    //                 {
    //                     model : models.Ingredients,
    //                     as: "Ingredient",
    //                     through: {
    //                         attributes : ['qty', 'unit']
    //                     },
    //                 },
    //                 {
    //                     model : models.Utensils,
    //                     as: "Utensil",
    //                     through: {
    //                         attributes : []
    //                     },
    //                 }
    //             ]
    //         },

    //     ]
    // })

    // let formattedInstructions = [];
    // Recipe.SubRecipes.forEach((subrecipe, index) => {
    //     console.log(index)

    //     for(const [index, value] of Object.entries(subrecipe.instructions)) {

    //         formattedInstructions.push(value);
    //     }
    // })
    // res.send(formattedInstructions)
    // const subRecipes = await Recipe.getSubRecipes();
    // const ingredients = subRecipes.map(subrecipe => console.log(subrecipe.getIngredients()))
    // Recipe.subRecipes = subRecipes

    // console.log(Recipe)

    let { title, date, picture, published } = Recipe;

    let [...subRecipes] = Recipe.SubRecipes;

    let ingredients = [];
    let utensils = [];

    Recipe.SubRecipes.forEach((subrecipe) => {
      console.log(subrecipe);
      subrecipe.Ingredient.forEach((ingredient) => {
        ingredients.push(ingredient);
      });
      subrecipe.Utensil.forEach((utensil) => {
        utensils.push(utensil);
      });
    });

    let response = {
      id,
      title,
      date,
      picture,
      published,
      subRecipes,
      ingredients,
      utensils,
    };

    await res.send(response);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const insertRecipe = async (req, res) => {
  try {
    const newRecipe = await models.Recipes.create(req.body);
    res.json(newRecipe);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const updateRecipe = async (req, res) => {
  try {
    let id = Number(req.params.id);
    if (isNaN(id)) res.status(400).json({ error: 'id mal formaté' });
    await models.Recipes.update(req.body, { where: { id: req.params.id } });
    res.status(200).json({ message: 'Resource has been updated' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    await models.Recipes.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: 'Recipe has been deleted.' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllRecipes,
  getRecipe,
  insertRecipe,
  updateRecipe,
  deleteRecipe,
};
