const express = require('express');
const session = require('express-session');
const cors = require('cors');

const app = express();

const { Recipes } = require('./models');
const router = require('./routes/index.js');
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';

app.use(express.json());
app.use(express.static('public'));
app.use(cors({
    origin: "*"
}));
app.use(router);


app.listen(PORT, () => {
  console.log(`App running on http://${HOST}:${PORT}`)
});

// app.route("/recipes")
//    .get(async (req, res) => {
//         let recipes = await Recipes.findAll();
//         console.log(recipes);
//         res.send(recipes);
//    })
//    .post((req, res) => {
//         console.log(req.body);
//         Recipes.create(req.body);
//         res.send(201);
//    });
