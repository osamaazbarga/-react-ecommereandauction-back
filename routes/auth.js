const express = require('express');
const User=require('../models/user.model')
require('../config/db')
const router=express.Router()

//middlewares
const {authCheck,adminCheck}=require('../middleware/auth')
//controller
const {createOrUpdateUser,currentUser}=require('../controllers/auth')
router.post('/createorupdateuser',authCheck, createOrUpdateUser)
router.post('/currentuser',authCheck, currentUser)
router.post('/currentadmin',authCheck,adminCheck, currentUser)

    
// })
router.post('/create',(req,res)=>{
    res.json({
        data:"you succsess"
    })
})

const myMiddleware=(req,res,next)=>{
    console.log('im a meddleware');
    next();
}

router.get('/testing',myMiddleware,(req,res)=>{
    res.json({
        data:"you succsess"
    })
})


module.exports=router