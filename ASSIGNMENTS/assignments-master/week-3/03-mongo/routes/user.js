const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course} = require("../db");
// User Routes
router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username:username,
        password:password
    })
    .then(function()
    {
       res.json( {message:"Admin created"})
    })
        

});

router.get('/courses', (req, res) => {
    Course.find({}).then(function(resp)
{
    res.json({
        courses:resp
    })
});

});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    const id = req.params.courseId;
   
    const username = req.headers.username;
    
    await User.updateOne(
            {
                username:username
            },
        {
           "$push":
           {
            purchasedCourses:id,
           }
        }
    )
        res.json({
            msg:"comp",
        })
});
  
//     .catch(function(e)
// {

// })
    

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
   
    const username = req.headers.username;
    
    const user = await User.findOneOne(
            {
                username:username
            },
    );
    const courseid = await Course.find(
        {
        _id:{
            "$in":user.purchasedCourses
        }
    }
    );
        res.json({
            msg:courses,
        })

});

module.exports = router