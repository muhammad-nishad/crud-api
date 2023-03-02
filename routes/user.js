const { addNewUser, getUsers, updateUser, deleteUser } = require('../controller/user')

const router = require('express').Router()


router.get('/users', getUsers)
router.post('/users', addNewUser)
router.put('/users/:id',updateUser)
router.delete('/users/:id',deleteUser)

module.exports = router