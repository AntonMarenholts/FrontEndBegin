// Timers

let x = 10;

setTimeout(() => {
    console.log("Stop");
}, 2000);// 2000 ms === 2sek

const y = 20;
console.log(y);

setTimeout(() => {
    x=12;
    console.log(x);
}, 1000);
console.log("x: " + x);