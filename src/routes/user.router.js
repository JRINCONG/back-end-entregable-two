const { getAll, Create, getOne, Destroy, update } = require('../controller/User.controller');
const express = require('express');

const UserRouter = express.Router();

UserRouter.route("/")
		.get(getAll)
        .post(Create)
        
 UserRouter.route("/:id")
               .get(getOne) 
               .delete(Destroy)
               .put(update)       



        module.exports=UserRouter;