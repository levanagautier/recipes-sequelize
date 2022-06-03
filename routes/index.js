const express = require('express');
const router = express.Router();

const appRouter = require('./app.routes.js');


router.use((req, res, next) => {
    // res.locals.pseudo = req.session.pseudo;
    // res.locals.isAdmin = req.session.isAdmin
    next();
});

router.use('/', appRouter);
// router.get('/', (req, res) => {
//     res.send('Welcome to Recipes!')
// })
  
router.get('*', (req, res, next) => {
    res.render("main/layout", {
        template: "error",
        error: "404 — La page que vous avez demandé n'existe pas",
    });
    return;
});

module.exports = router;
