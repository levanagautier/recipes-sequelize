const jwt = require('jsonwebtoken');
// const { SECRET_KEY } = require('../config/config.json');
const SECRET_KEY= "34f3c3d4-4c0c-4d40-aeb3-3a6a31be1dc3"
const { checkUserPassword, getUserByEmail } = require('./user.controller');
const models = require('../models');

const login = async (req, res, next) => {
    try {

        const { email, password } = req.body;
            const user = await models.User.findOne({where : { email}});
            
            if (!user) {
                res.status(400).json({error: 'Problème d\'authentification : nous n\'avons aucun utilisateur avec ce mot de passe ou cet email.'})
                return;
            }
            const passwordChecked = await checkUserPassword(password, user.password);
            if (passwordChecked) {
                req.session.token = jwt.sign(
                    { userId: user.id },
                    SECRET_KEY,
                    { expiresIn: "24h" }
                );

                res.status(200).json({ message : "Successful authentication"});
            } else {
                res.status(403).json({error : "Incorrect password"})
            }
    } catch (err) {
        throw err;
    }
};

const logout = async (req, res) => {
    req.session.destroy();
}


module.exports = {
    login,
    logout
}
