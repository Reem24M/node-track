
const { getAllUsers, getUserById, addUser, editUser, deleteUser } = require('../controllers/User/user')
const { CheckAuth } = require('../middelware/checkauth')
const app=require('express')
const router=require('express').Router()

app.use(CheckAuth)

router.get('/users',getAllUsers)
router.get('/users/:id',getUserById)
router.post('/add-user',addUser)
router.put('/edit-user/:id',editUser)
router.delete('/users/:id',deleteUser)

module.exports=router

