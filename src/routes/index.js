const express = require('express');
const UserRouter = require('./user.router');
const router = express.Router();

// colocar las rutas aquí



router.use('/users', UserRouter)


module.exports = router;