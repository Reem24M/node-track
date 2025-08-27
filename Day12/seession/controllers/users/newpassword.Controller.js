const { UsersData } = require('../../modules/users');
const { TokeData } = require('../../modules/token'); // تأكدي إن اسم الموديل مضبوط
const bcrypt = require('bcrypt');

const NewPassWord = async (req, res) => {
  try {
    let { email, otp, newpassword, confirmpassword } = req.body;

    if (!email || !otp || !newpassword || !confirmpassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (newpassword.length < 8 || confirmpassword.length < 8) {
      return res.status(400).json({ message: "Password must be at least 8 characters long" });
    }

    if (newpassword !== confirmpassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    let user = await UsersData.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    let tokenData = await TokeData.findOne({ email, otp });
    if (!tokenData) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    await TokeData.deleteOne({ email, otp });

    let newhashpass = await bcrypt.hash(newpassword, 10);
    user.password = newhashpass;
    await user.save();

    return res.status(200).json({ message: "Password updated successfully" });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { NewPassWord };
