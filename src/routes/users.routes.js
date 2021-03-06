const {Router} = require('express');
const usersController = require('../controllers/usersController');

const usersRouter = Router();

usersRouter.post('/register', usersController.create);

module.exports = usersRouter;