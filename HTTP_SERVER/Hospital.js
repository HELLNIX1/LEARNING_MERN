const exp = require("express");
let app = exp();
const bp = require("body-parser");
app.use(bp.json());
let users = [
    {
        name:"John",
        kidneys: [
            {
               healthy : true, 
            }
        ]
    }
]

app.get('/',function(req,res)
{
    let johnkidneys = users[0].kidneys;
    let number = johnkidneys.length;
    res.json({
        johnkidneys,
        number,
    });
});

app.post('/',function(req,res)
{
    let isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy,
    })
    res.send("ok");
});

app.put('/',function(req,res)
{
    
   for(let i = 0;i < users[0].kidneys.length;i++)
    {
        users[0].kidneys[i].healthy = false;
    }
    res.json({
        status :"ok",
    });
});

app.delete('/',function(req,res)
{
    const newkid = [];
   for(let i = 0;i < users[0].kidneys.length;i++)
    {
        if(users[0].kidneys[i].healthy == true)
        {
            newkid.push({
                healthy : true,
            });
        }
    }
    res.json({
        status :"ok",
    });
    // res.sendStatus(411).json({
    //     msg:"You have no bad",
    // });
});

app.listen(3000);