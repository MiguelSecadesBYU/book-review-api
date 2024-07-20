const express = require('express');
const router = express.Router();
const { registerUser, getUsers, getUserById, deleteUser } = require('../controllers/userController');

router.post('/register', registerUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.delete('/:id', deleteUser); 

module.exports = router;
