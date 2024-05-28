// // setTimeout 
// const startTime = new Date().getTime();

// // Call setTimeout with a delay of 1000 milliseconds (1 second)
// console.log(setTimeout(() => {
//     // Record the end time when the inner function is executed
//     const endTime = new Date().getTime();

//     // Calculate the actual delay
//     const actualDelay = endTime - startTime;

//     console.log(`Actual delay: ${actualDelay} milliseconds`);
// }, 3000));
// console.log(setTimeout(() => {},3000))

// // TERMINAL CLOCK
// function dc()
// {
//     const now = new Date();
//     const hrs = now.getHours().toString().padStart(2,'0');
//     const min = now.getMinutes().toString().padStart(2,'0');
//     const sec = now.getSeconds().toString().padStart(2,'0');
//     console.log(`${hrs}:${min}:${sec}`);
// }

// setInterval(dc, 1000);


// CALLBACK FUNCTIONS
// function sq(a)
// {
//     return a*a;
// }
// function sum(a,b,fn)
// {
//     let val1 = fn(a);
//     let val2 = fn(b);
//     return val1+val2;
// }
// // console.log(sum(2,3,sq));

// // ANONYMOUS FUNCTION
// let ans = sum(2,3,function sq(n){return n*n;});
// console.log(ans);

// ans = sum(2,3,function (n){return n*n;});
// console.log(ans);

// //TIME FOR A FUNCTION 
// let d1 = new Date();
// let sttime = d1.getTime();
// // function
// let d2 = new Date();
// let endtime = d2.getTime();

// TERMINAL CLOCK
// function printtime()
// {
//     console.log(new Date().getTime());
// }

// setInterval(printtime,1000);

function counter(num) {
    console.log(num);
    if (num > 0) {
        setTimeout(function(){counter(num - 1)}, 1000);
    }
}

// Start the counter from 10
counter(10);
