const { UsersData } = require('../../Day12/seession/modules/users');
const { Login } = require('./controllers/users/loginController');
const { Logout } = require('./controllers/users/logoutController');
const { NewPassWord } = require('./controllers/users/newpassword.Controller');
const {Register}=require('./controllers/users/registerController');
const {SendOtp} =require('./controllers/users/sendotpController');
const {app}=require('./index');

const IsLoginedIn=async(username)=>{
    let user= await UsersData.findOne({username});
    if(user)return user;
    else return null; 
}

app.post('/login',Login)

app.post('/register',Register)

app.post('/newpass',NewPassWord)

app.post('/logout',Logout)

app.post('/send-otp',SendOtp)


app.get('/',(req,res)=>{
   UsersData.find()
   .then(users=>{
       res.status(200).json({users});
   })
   .catch(err=>{
       res.status(500).json({message:"Internal server error", err});
   });
}); 
 