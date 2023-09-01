import {Request, Response} from "express";

type PropsView = {
    title:string
    cssType: string
}

const mainController = {

    loginScreen: (request: Request, response: Response) => {
        
        const data: PropsView={
            title: "login",
            cssType: "/css/index.css"
        }

        return response.render('index', data);
    },

    formScreen: (request: Request, response:Response) => {

        const data: PropsView={
            title: "Cadastro",
            cssType: '/css/form.css'
        }

        return response.render('form', data);
    }
};

export default mainController;