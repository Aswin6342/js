console.log("one");
setTimeout(()=>{
    console.log("two");
},2000);
console.log("three");

setInterval(()=>{
    console.log("hello");
},3000);


let intervalId = setInterval(() => {
  console.log("Running...");
}, 1000);
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stopped!");
}, 5000);