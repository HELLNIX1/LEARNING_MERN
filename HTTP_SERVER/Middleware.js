const express = require('express');
const bp = require('body-parser')
const port = 3000;
const app = express();

// let reqnum = 0;
// function calculateReq(req,res,next)
// {   
//     reqnum += 1;
//     next();

// }
app.use(bp.json());
// app.get('/',calculateReq,function(req,res)
// {
//     console.log(reqnum);
//     res.send('Hello World1');
// });



// //GLOBAL CATCHES
// app.use(function(err,req,res,next)
// {
//     res.send("error");
// });


// USING FUNCTIONS
// function oldenough(age)
// {
//     return age > 14 ? true : false;
// }
// app.get('/ride1',calculateReq,function(req,res)
// {
//     if(oldenough(req.query.age)){
//     console.log(reqnum);
//     res.send('Hello World1');}
//     else{
//         res.json({
//             msg :"Not old",
//         })
//     }
// });

// USING MIDDLEWARE
function oldenough(req,res,next)
{
    if(!oldenough(req.query.age)){
        res.status(411).json({
            msg :"Not old",
        });
        return;
    }
        else{
            next();  
        }
}
app.get('/ride1',oldenough,function(req,res)
{
    if(oldenough(req.query.age)){
    console.log(reqnum);
    res.send('Hello World1');}
    else{
        res.json({
            msg :"Not old",
        })
    }
});

app.listen(port);
