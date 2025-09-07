const { UsersData } = require('../../modules/users')
const { TokeData } = require('../../modules/token')
const bcrypt = require('bcrypt')


const Register = async (req, res) => {
    try {

        let { firstname, lastname, username,age, email, password, role } = req.body;
        if (!firstname || !lastname || !username || !email || !password || !age) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if(password.length<8) return res.status(400).json({message:"Password must be at least 8 characters long"});
        const user = await UsersData.findOne({ username: username }, { email: email })
        if (user)
            return res.status(409).json({ message: "Username or email already exists" });

        if (!role) role = 'user'
        const hashpassword = await bcrypt.hash(password, 10)
        if(password.length<8) return res.status(400).json({message:"Password must be at least 8 characters long"});
        // add user to database
        const newUser = new UsersData({
            firstname,
            lastname,
            username,
            age,
            email,
            password: hashpassword,
            role
        })
        // get a session for user 
        await newUser.save();
        const newToken = new TokeData({
            username,
            email,
            role
        })
        await newToken.save();


        return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
module.exports = { Register };