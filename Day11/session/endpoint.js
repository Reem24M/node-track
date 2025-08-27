const {app}=require('./index');
const {registerController}=require('./controllers/registerController.js')
const {LoginController}=require('./controllers/loginController.js')
const {GetAllUsers}=require('./controllers/usersControllers.js');
const { DeleteUser } = require('./controllers/deleteUsercontroller.js');

app.get('/',(req,res)=>{
    // res.render('index');
    res.send("Hello World");
}); 

app.post('/register',registerController)

app.post('/login',LoginController)

app.get('/users',GetAllUsers)

app.delete('/delete-user',DeleteUser)