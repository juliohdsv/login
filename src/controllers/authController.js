const fs = require('fs');


const authController = {

    getLoginScreen: (request, response) =>{
        response.render('index');
    },
    
    login: (request, response) => {

        const { email, password } = request.body;
        
       // fs.appendFileSync(path.join(__dirname, './src/database/users.db.json');

        console.table({ email, password });


        //response.render('home', {user: email});
    }

};

module.exports = authController;