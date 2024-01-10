const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,User,Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET }=require("../config")

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    
    //check if user already exist or not if not then create
    Admin.create({
        username:username,
        password:password
    })
    .then(function(value){
        res.json({
            msg:"Admin has created successfully"
        })
    })
    .catch((err)=>{
        res.json({
            msg:"User is not added",
            error:err
        })
    })
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    console.log(username)
    console.log(password)
    console.log(JWT_SECRET)
    Admin.find({
        username:username,
        password:password
    })
    .then((user)=>{  //if user exist
        const token = jwt.sign({
            username
        }, JWT_SECRET);
       console.log(token)
       res.json({
        token
       })
    })
    .catch((error)=>{
        console.log(error)
        res.status(411).json({
            message: "Incorrect email and pass"
        })
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title=req.body.title;
    const description=req.body.description;
    const imageLink=req.body.imageLink;
    const price=req.body.price

  const CreatedCourse= await  Course.create({
        title:title,
        description:description,
        imageLink:imageLink,
        price:price
    })
    console.log(CreatedCourse)
    res.json({
        msg:"course has created",
        course_Id:CreatedCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
   const courses= await Course.find({})
   res.json({
    courses:courses
   })
});

module.exports = router;