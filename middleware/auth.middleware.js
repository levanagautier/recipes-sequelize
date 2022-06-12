const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    jwt.verify(req.session.token, SECRET_KEY, (err, decode) => {
        if (
            typeof decode === "undefined" ||
            (req.session.userId && req.session.userId !== decode.userId)
        ) {
            res.status(403).json({error: err});

            return;
        }
        next();
    });
};

module.exports = authMiddleware;