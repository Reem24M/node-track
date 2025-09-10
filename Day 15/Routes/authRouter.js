const { Forget_password } = require('../controllers/Auth/forget-password')
const { login } = require('../controllers/Auth/logincontroller')
const { logout } = require('../controllers/Auth/logoutcontroller')
const { register } = require('../controllers/Auth/registercontroller')
const { Send_otp } = require('../controllers/Auth/send-opt')

const router=require('express').Router()

router.post('/resgister',register)
router.post('/login',login)
router.post('/forget-password',Forget_password)
router.post('/send-otp',Send_otp)
router.post('/logout',logout)


module.exports=router