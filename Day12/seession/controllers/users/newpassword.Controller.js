const { UsersData } = require('../../modules/users')
const { TokeData } = require('../../modules/token')
const bcrypt = require('bcrypt')

const NewPassWord = async (req, res) => {
    let { email, newpassword, confirmpassword } = req.body
    if (!email || !newpassword || !confirmpassword) return res.status(400).json({ message: "All fields are required" });

    if (newpassword.length < 8 || confirmpassword.length < 8) return res.status(400).json({ message: "Password must be at least 8 characters long" });

    if (newpassword !== confirmpassword) return res.status(400).json({ message: "Passwords do not match" });
    let user = await UsersData.findOne({ email })
    if (!user) return res.status(404).json({ message: "User not found" });

    // to make the new password different from the old password
    // if (newpassword === user.password) return res.status(400).json({ message: "New password must be different" });

    let newhashpass = await bcrypt.hash(newpassword, 10)
    user.password = newhashpass
    await user.save()
    return res.status(200).json({ message: "Password updated successfully" ,user, newpassword});
}
module.exports = { NewPassWord };