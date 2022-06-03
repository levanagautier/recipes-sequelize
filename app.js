// import express from 'express';
const express = require('express')
const app = express();

const { Recipes } = require('./models')
const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
});app.get('/', (req, res) => {
  res.send("This is root!")
})

app.route("/recipes")
   .get(async (req, res) => {
        let recipes = await Recipes.findAll();
        console.log(recipes);
        res.send(recipes);
   })
   .post((req, res) => {
        console.log(req.body);
        Recipes.create(req.body);
        res.send(201);
   });