const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const {v4: uuid} = require('uuid'); 

const userPath = path.join(__dirname, '..', 'database','users.json');

const usersController = {
    
    create: (request, response) =>{    

            const users = JSON.parse(fs.readFileSync(userPath));
            const { name, email, password } = request.body;

            if(email == '' || password == '' || name ==''){
                return response.render('index', {
                    title: "Login",
                    cssType: "/css/index.css"
                });
            };

            const newUser = {
                id: uuid(),
                name: name,
                email: email,
                password: bcrypt.hashSync(password)
            }

            users.push(newUser);
            fs.writeFileSync(userPath, JSON.stringify(users));

            return response.render('index', {
                title: "Login",
                cssType: "/css/index.css"
            });
    },
};

module.exports = usersController;