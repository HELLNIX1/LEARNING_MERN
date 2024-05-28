const express = require('express');
const bp = require('body-parser')
const port = 3000;
const app = express();
function cal(n)
{   
    let ans = 0;
    for(let i = 1;i<n;i++)
        ans += i;
    return ans;

}
app.use(bp.json());
app.get('/',function(req,res)
{
    res.send('Hello World1');
});
app.post('/post',function(req,res)
{
    console.log(req.body);
    console.log(req.headers);
    res.send({
        msg : "2+2 = 4",
    });
});

app.get('/cal',function(req,res)
{
    let n = req.query.n;
    res.send(cal(n).toString());
});

app.listen(port);

