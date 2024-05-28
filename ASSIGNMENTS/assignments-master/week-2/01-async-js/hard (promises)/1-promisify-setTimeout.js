/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(re)
{
    setTimeout(re,n*1000);
}
);
}
wait().then(function()
{
    console.log("2000");
})
module.exports = wait;
