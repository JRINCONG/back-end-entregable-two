const catchError = require('../utils/catchError');
const User = require('../models/user');

const getAll = catchError(async(req, res) => {
    
    const result= await User.findAll()
    return res.json(result)
});


const Create = catchError(async(req, res) => {
    
    const result= await User.create(req.body)
    return res.sendStatus(201).json(result)
});


const getOne = catchError(async(req, res) => {
    const { id }= req.params
    const result= await User.findByPk(id)
    if(!result) return res.Status(404).json('Users not found')
    return res.json(result)
});

const Destroy = catchError(async(req, res) => {
    const { id }= req.params
    const result= await User.destroy({where:{id}})
    if(!result) return res.Status(404).json('Users not found')
    return res.json({
       users:id,
       msg:"user deleted successfully",
       userdelelete:result
    })
});


const update = catchError(async(req, res) => {
    const { id }= req.params
    const result= await User.update(req.body, {where:{id}, returning:true})
    if(result[0] === 0) return res.json( {
        users:id,
        msg:`User ${ id } not found`,
        data:'Not updated'
    })
    return res.json(result)
});

module.exports={
    getAll,
    Create,
    getOne,
    Destroy,
    update
}