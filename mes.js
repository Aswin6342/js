// let intervalId = setInterval(() => {
//   console.log("hello");
// }, 1000);
// setTimeout(() => {
//   clearInterval(intervalId);
  
// }, 5000);

// setTimeout(()=>{
// for(let i=0;i<5;i++){
//     console.log("hello");
// }},1000);


for(let i=1;i<=5;i++){
    setTimeout(()=>{
        console.log("hello");
    },i*1000);}