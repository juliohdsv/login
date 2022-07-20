const mainController = {

    loginScreen: (request, response) => {
        return response.render('index', {
            title: "Login",
            cssType: '/css/index.css'
        });
    },

    formScreen: (request, response) => {
        return response.render('form', {
            title: "Cadastro",
            cssType: '/css/form.css'
        });
    },
};

module.exports = mainController;