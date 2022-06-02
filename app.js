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