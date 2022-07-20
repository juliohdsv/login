const {Router} = require('express');
const mainController = require('../controllers/mainController');

const mainRouter = Router();

mainRouter.get('/', mainController.loginScreen);
mainRouter.get('/form', mainController.formScreen);

module.exports = mainRouter;