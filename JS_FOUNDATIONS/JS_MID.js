
//FILE READING
// const fs = require('fs');

// fs.readFile("a.txt","utf-8", function (err,data)
// {
//     console.log(data);
// });

// console.log("HG");

// UGLY WAY
const fs = require('fs');

// function k(cb){
//     fs.readFile("a.txt","utf-8", function (err,data)
//     {
//         cb(data);
//     });
// };
// function cb(a)
// {
//     console.log(a);
// }
// k(cb);

// using promises
function k(){
    return new Promise(function(cb){
        fs.readFile("a.txt","utf-8", function (err,data)
        {
            console.log(data);
            cb(data);
        });
    })
    
};
function cb(a)
{
    console.log("p");
    // console.log( b );
    
}
k().then(cb);


// ASYNC WAIT
// function k(){
//     return new Promise(function(cb){
//         fs.readFile("a.txt","utf-8", function (err,data)
//         {
//             cb(data);
//         });
//     })
    
// };

// function cb(a)
// {
//     console.log( a );
// }
// function main(){k().then(cb);}
// main();

// function k(){
//     const fs = require('fs');
//     return new Promise(function(cb){
//         fs.readFile("a.txt","utf-8", function (err,data)
//         {
//             cb(data);
//         });
//     })
    
// };

// function cb(a)
// {
//     console.log(a+"1");
// }
// async function main(){
    
//     let value = await k();
// }
// main();

// WRITING FILES
// const fs = require('fs');

// fs.writeFile("a.txt","ABC",function(err)
// {

// });


// console.log("HG");

// FILE CLEANER
// const fs = require('fs');
// fs.readFile("a.txt",'utf-8',function(err,data)
// {
//     data = data.split(' ').join(' ');
//     fs.writeFile("a.txt",data,function(err)
// {

// });
// // console.log(data);
// });

