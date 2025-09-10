const User = require("../../models/users");
const crypto = require("crypto");

const Forget_password = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).send("Email required");

    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("User not found");

    const resetToken = crypto.randomBytes(32).toString("hex");

    const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    user.resetTokenPassword = hashedToken;
    user.resetTokenPasswordExpired = Date.now() + 1000 * 60 * 10; 

    await user.save();

    return res.status(200).json({ message: "Token generated and sent", resetToken });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

module.exports = { Forget_password };
