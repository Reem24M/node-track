// const {app} =require('../index');
const { Login } = require('../controllers/users/loginController');
const { Register } = require('../controllers/users/registerController');
const { Logout } = require('../controllers/users/logoutController');
const { NewPassWord } = require('../controllers/users/newpassword.Controller');
const { SendOtp } = require('../controllers/users/sendotpController');
const { AddProduct, GetProductById, GetAllProducts } = require('../controllers/products/addproductController');
const { DeleteProduct } = require('../controllers/products/deleteproductController');
const { EditProduct } = require('../controllers/products/editproductcontroller');
const { UsersData } = require('../modules/users');

const router=require('express').Router();

router.post('/login',Login)
router.post('/register',Register)
router.post('/newpass',NewPassWord)
router.post('/logout',Logout)
router.post('/send-otp',SendOtp)
router.post('/add-product',AddProduct)
router.get('/product/:id',GetProductById)