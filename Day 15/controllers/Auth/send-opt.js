const User = require("../../models/users");

const Send_otp = async (req, res) => {
  try {
    let { email } = req.body;
    if (!email) return res.status(400).send("email required");

    let user = await User.findOne({ email });
    if (!user) return res.status(404).send("user not found");

    if (user.otp && user.otpExpaired > Date.now()) {
      return res.status(400).send("OTP already sent, please wait until it expires");
    }

    let newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otp = newOtp;
    user.otpExpaired = Date.now() + 1000 * 60 * 5; 

    await user.save();

    return res.status(200).json({ message: "OTP sent successfully", otp: newOtp });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server error");
  }
};

module.exports = { Send_otp };
