import express from 'express'
import { logIn, protectedRouter, regesterUser } from '../controllers/auth.js'
import { validateSchema } from '../middlewares/validator.js'
import { createUserschema } from '../schemas/userSchemas.js'
const router = express.Router()

// real crud router
router.post('/register', validateSchema(createUserschema) , regesterUser)
router.post('/login', logIn)

// protected route
router.get('/profile', protectedRouter, (req ,res)=>{
    console.log('req,user', req.user)
    res.json('protected routed')
})

export default router