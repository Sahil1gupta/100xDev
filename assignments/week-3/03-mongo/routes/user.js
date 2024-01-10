const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User,Course } = require("../db");

// Description: Creates a new user account.
//   Input: { username: 'user', password: 'pass' }
//   Output: { message: 'User created successfully' }
// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username=req.body.username;
    const password=req.body.password;

    User.create({
        username:username,
        password:password
    })
    .then(function(response){
        console.log(response)
        res.json({
            msg:"user has created"
        })
    })

});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find({})                 //
    .then((response)=>{
        res.json({
            cousres:response
        })
    })
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const courseId=req.params.courseId;
    const username=req.headers.username;

    await User.updateOne({
        username:username
    },
    {
        "$push":{
            purchasedCourses:courseId
        }
    })
    res.json({
        message:"purchased completed"
    })
});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    const username=req.headers.username;
    const user= await User.findOne({
        username:username
     })
     console.log(user.purchasedCourses)
//    const courseToextract=user.purchasedCourses
  const courses= await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
   })

   res.json({
    courses:courses
   })
});

module.exports = router