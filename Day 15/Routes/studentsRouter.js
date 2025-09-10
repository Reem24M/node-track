const { getStudents, DeleteStudent, editStudent, addStudent, getStudentByid } = require('../controllers/Student/student')
const { CheckAuth } = require('../middelware/checkauth')
const app=require('express')
const router=require('express').Router()

app.use(CheckAuth)

router.get('/students',getStudents)
router.get('/students/:id',getStudentByid)
router.post('/add-student',addStudent)
router.put('/edit-student/:id',editStudent)
router.delete('/students/:id',DeleteStudent)

module.exports=router

