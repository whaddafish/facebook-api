const express = require("express");
const router = express.Router();
const Users = require('../model/User')
const auth = require('../middleware/auth');
const UserController = require('../controller/userController')


router.post("/register",UserController.adduser)

router.post("/login", UserController.login)

module.exports = router