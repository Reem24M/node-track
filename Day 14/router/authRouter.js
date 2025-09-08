

const router=require('express').Router();

const {login, register}=require('../controllers/authController');
router.post('/login',login)
router.get('/login',(req,res)=>{res.send("Login Page from  router")})


router.post('/register',register)
router.get('/register',(req,res)=>{res.send("Register Page from router")})
module.exports=router;