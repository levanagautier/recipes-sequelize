const express = require('express');
const router = express.Router();

const apiRouter = require('./api.routes.js');
const appRouter = require('./app.routes.js');


router.use((req, res, next) => {
    // res.locals.pseudo = req.session.pseudo;
    // res.locals.isAdmin = req.session.isAdmin
    next();
});

router.use('/', apiRouter);
router.use('/auth', appRouter);

module.exports = router;
