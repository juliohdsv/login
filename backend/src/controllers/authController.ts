import {Request, Response} from "express";
import bcrypt from "bcryptjs";

const authController = {
    
    login: (request: Request, response: Response) => {

        type PropsView = {
            title:string
            cssType: string
        }

        const email: string = request.body.email;
        const password:string = request.body.password;
        
        const data: PropsView={
            title: "Home",
            cssType: "/css/home.css"
        }

        return response.render('index', data);

    },
};

export default authController;