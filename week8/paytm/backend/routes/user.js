const express=require('express')
const router=express.Router()
const zod=require('zod')
const jwt=require("jsonwebtoken")
const {JWT_SECRET}=require("../config")
const {User} =require("../db")

const {authMiddleware}=require("../middleware/userAuth")
//zod for sign-up
const signupBody=zod.object({
    username:zod.string().email(),
    firstname:zod.string(),
    lastname:zod.string(),
    password:zod.string()
})

router.post("/signup",async(req,res)=>{

    const {success}=signupBody.safeParse(req.body)

    if(!success){
        return res.status(411).json({
            message:"Email already taken / Incorrect inputs"
        })
    }

    const existingUser=await  User.findOne(
        {username:req.body.username}
    )

    if(existingUser){
        return res.status(411).json(
            {message:"Email already taken / Incorrect inputs"}
        )
    }

    const user =await User.create({
        username:req.body.username,
        password:req.body.password,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
    })

    const userId=user._id;

    const token=jwt.sign({
        userId,
    },JWT_SECRET);

    res.json({
        message:"User created successfully",
        token:token
    })
})

//zod for signin
const signinBody=zod.obejct({
    username:zod.string(),
    password:zod.string()
})

router.post('/signin',authMiddleware,async(req,res)=>{
        const success=signinBody.safeParse(req.body)
        
        if(!success){
            res.status(411).json({
                message:"fill inputs in correct format"
            })
        }

        const checkUser=await User.findOne({
            username:req.body.username,
            password: req.body.password
        })

        if(checkUser){
            const token = jwt.sign({
                userId: checkUser._id
            }, JWT_SECRET);
    
            res.json({
                token: token
            })
            return;
    
        }
        
    res.status(411).json({
        message: "Error while logging in"
    })
     

    const updateBody=zod.object({
        password:zod.string().optional(),
        firstname:zod.string().optional(),
        lastname:zod.string().optional(),
    })
    router.post('/put',async(req,res){
       const {success}=updateBody.safeParse(req.body);
        if(!success){
            res.status(411).json({
                message: "Error while updating information"
            })
        }

        await User.updateOne(
            {
                _id:req.userId
            },
            req.body
        )

        res.json({
            message: "Updated successfully"
        })

    })

    router.get('/bulk',async(req,res)=>{

        const filter=req.query.filter || "";

        const users=await User.find({
           $or:[{
            firstName:{
                "$regex":filter
            }
           },
           { 
            lastName:{
                "$regex":filter
            }
        }
           ]
        })

        res.json({
            user:users.map(user=>({
                username:user.username,
                firstName:user.firstName,
                lastName:user.lastName,
                _id:user._id
            }))
        })
    })
})


module.exports=router