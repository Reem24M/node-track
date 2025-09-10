const Student = require("../../models/student");
const bcrypt=require('bcrypt')
const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    return res.status(200).json(students);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).send("Student not found");
    return res.status(200).json(student);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};

const addStudent = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
      return res.status(400).send("All fields are required");
    }
    let hashpassword=bcrypt.hash(password,10)
    const newStudent = new Student({ firstname, lastname, email, password:hashpassword });
    await newStudent.save();

    return res.status(201).json(newStudent);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};

const editStudent = async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedStudent) return res.status(404).send("Student not found");

    return res.status(200).json(updatedStudent);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};

const deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) return res.status(404).send("Student not found");

    return res.status(200).send("Student deleted successfully");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  editStudent,
  deleteStudent,
};
