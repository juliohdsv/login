const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const userPath = path.join(__dirname, '..', 'database','users.json');

const authController = {
    
    login: (request, response) => {

        const users = JSON.parse(fs.readFileSync(userPath));
        const { email, password } = request.body;
        const userFound = users.find(item => item.email === email);

        if(!userFound){
            return response.status(401).render('index', {
                title: "Login",
                cssType: "/css/index.css"
            });
        };

        const passwordFound = bcrypt.compareSync(password, userFound.password); 

        if(!passwordFound){
            return response.status(401).render('index', {
                title: "Login",
                cssType: "/css/index.css"
            });
        }
 
        return response.status(401).render('home', {
            title: "Home",
            cssType: "/css/home.css",
            user: userFound.name
        });
    },
};

module.exports = authController;