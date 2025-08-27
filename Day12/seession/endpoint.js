const { AddProduct, GetProductById, GetAllProducts } = require('./controllers/products/addproductController');
const { DeleteProduct } = require('./controllers/products/deleteproductController');
const { EditProduct } = require('./controllers/products/editproductcontroller');
const { Login } = require('./controllers/users/loginController');
const { Logout } = require('./controllers/users/logoutController');
const { NewPassWord } = require('./controllers/users/newpassword.Controller');
const {Register}=require('./controllers/users/registerController');
const {SendOtp} =require('./controllers/users/sendotpController');
const {app}=require('./index');

// const { UsersData } = require('../../Day12/seession/modules/users');
// const IsLoginedIn=async(username)=>{
//     let user= await UsersData.findOne({username});
//     if(user)return user;
//     else return null; 
// }

app.post('/login',Login)

app.post('/register',Register)

app.post('/newpass',NewPassWord)

app.post('/logout',Logout)

app.post('/send-otp',SendOtp)

app.post('/add-product',AddProduct)

app.get('/product/:id',GetProductById)

app.get('/',GetAllProducts)

app.delete('/delete-product/:id',DeleteProduct)

app.put('/edit-product/:id',EditProduct)
