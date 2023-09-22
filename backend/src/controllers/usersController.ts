import {Request, Response} from "express";
import bcrypt from "bcryptjs";
import {v4 as uuid} from "uuid"; 


const usersController = {
    
    create: (request: Request, response: Response) =>{   
        
            type PropsView = {
                title:string
                cssType: string
            }

            type User ={
                id:string
                name: string
                email: string
                password: string
            }

            const data: PropsView={
                title: "login",
                cssType: "/css/index.css"
            }
            
            const {name, email, password} = request.body;
            const newUser: User = {
                id: uuid(),
                name: name,
                email: email,
                password: bcrypt.hashSync(password)
            }

            return response.render('index', data);
    },
};

export default usersController;