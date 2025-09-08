const { CreateUser, Getusers } = require('../controllers/usersController');


const router = require('express').Router();

router.get('/users', Getusers)
router.post('/new', CreateUser)

module.exports = router;