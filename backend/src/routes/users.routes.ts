import {Router} from "express";
import usersController from "../controllers/usersController";

const usersRouter = Router();

usersRouter.post('/register', usersController.create);

export default usersRouter;