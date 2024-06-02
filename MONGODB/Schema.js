import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema({
//     email: String,
//     password: String,
//     purchasedCourses : [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref : 'Course'
//     }]
// });

// const CourseSchema = new mongoose.Schema(
//     {
//         title:String,
//         price: 5999
//     }
// );

// const User = mongoose.model('User',UserSchema);
// const Course = mongoose.model('Course',CourseSchema);

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
});
const User = mongoose.model('User',UserSchema);

User.create(
    {
        email : req.body.email,
        password: req.body.password
    }
)

User.findById("1");
User.findOne({
    email: "hirakit%+@"
});
User.find({
    email: "hirakit%+@"
});

User.updateOne(
   {"id" : "1"},
   {$push :{purchasedCourses:co}}
)

User.deleteOne({email:"harikirat@gm"});
User.deleteMany({});