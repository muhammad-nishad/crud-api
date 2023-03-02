const { addNewUser, getUsers, updateUser, deleteUser } = require('../controller/user')

const router = require('express').Router()

//fetchig all users
router.get('/users', getUsers)

//adding new user
router.post('/users', addNewUser)

//updating a existing user
router.put('/users/:id',updateUser)

//deleting a user
router.delete('/users/:id',deleteUser)

module.exports = router