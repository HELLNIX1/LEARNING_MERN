const express = require("express");
const adminMiddleware = require("../middleware/admin");
const router = express.Router();
const {Admin} = require("../db");
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

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;