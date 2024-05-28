const express = require('express');
const zod = require('zod');
const port = 3000;
const app = express();

const sch = zod.string();

app.get('/',function(req,res)
{
    let arr = req.query.n;
    let valid = sch.safeParse(arr);
    console.log(arr);
    console.log(typeof arr);
    if((valid.success))
    res.send('Hello World1');
else
throw new Error();

});

//GLOBAL CATCHES
app.use(function(err,req,res,next)
{
    res.send("error");
});
app.listen(port);
