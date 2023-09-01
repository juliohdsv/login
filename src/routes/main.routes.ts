import {Router} from "express";
import mainController from "../controllers/mainController";

const mainRouter = Router();

mainRouter.get('/', mainController.loginScreen);
mainRouter.get('/form', mainController.formScreen);

export default mainRouter;