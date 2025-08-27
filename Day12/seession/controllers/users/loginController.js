const { UsersData } = require('../../modules/users')
const { OtpData } = require('../../modules/otp')
const { TokeData } = require('../../modules/token')
const bcrypt = require('bcrypt')

const Login = async (req, res) => {
    let { username, password } = req.body
    if (!username || !password) return res.status(400).json({ message: "Username and password are required" })
    const user = await UsersData.findOne({ username: username })
    if (!user) return res.status(404).json({ message: "User not found" })

    const match = await bcrypt.compare(password, user.password)
    if (!match) return res.status(401).json({ message: "Invalid password" })
    const addtoken = await TokeData({
        username: user.username,
        email: user.email,
        role: user.role
    })
    await addtoken.save()
    res.status(200).json({ message: "Login successful" })
}
module.exports = { Login }