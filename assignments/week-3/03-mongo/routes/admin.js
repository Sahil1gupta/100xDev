const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,Course } = require("../db");
const router = Router();

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

router.post('/courses', adminMiddleware, async (req, res) => {  //adminMiddleware-->will check if h]check if user exist or not kind of authenticate for that we have to send username and password in headers
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

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({})                 //
    .then((response)=>{
        res.json({
            cousres:response
        })
    })
});

module.exports = router;