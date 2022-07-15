const {Router} = require('express');
const authController = require('../controllers/authController');

const authRouter = Router();

authRouter.get('/auth', authController.getLoginScreen);
authRouter.post('/auth/user', authController.login);



module.exports = authRouter;