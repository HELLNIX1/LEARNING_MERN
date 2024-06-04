const express = require("express");
const adminMiddleware = require("../middleware/admin");
const router = express.Router();
const {Admin,Course} = require("../db");
// Admin Routes
router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    Admin.create({
        username:username,
        password:password
    })
    .then(function()
    {
       res.json( {message:"Admin created"})
    })
        
});

router.post('/courses', adminMiddleware,async (req, res) => {
   const title = req.body.title;
   const desc = req.body.desc;
   const imagelink = req.body.imagelink;
   const price = req.body.price;
   const newcourse = await Course.create({
    title,
    desc,
    imagelink,
    price
   })
   res.json({
    message:"Course",courseid : newcourse._id
   })

});

router.get('/courses', adminMiddleware, (req, res) => {
    Course.find({}).then(function(resp)
    {
        res.json({
            courses:resp
        })
    });
});

module.exports = router;