const User = require("../models/users");
const bcrypt = require("bcrypt");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("User not found");
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};

const addUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password, role } = req.body;

    if (!firstname || !lastname || !email || !password) {
      return res.status(400).send("All fields are required");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      role: role || "user",
    });

    await newUser.save();

    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};

const editUser = async (req, res) => {
  try {
    const { password, ...otherUpdates } = req.body;
    let updates = { ...otherUpdates };

    if (password) {
      updates.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true }
    );

    if (!updatedUser) return res.status(404).send("User not found");

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).send("User not found");

    return res.status(200).send("User deleted successfully");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};
module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  editUser,
  deleteUser
};
