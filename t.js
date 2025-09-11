let message = "coding is FUN when you practice consistently";
let arr = message.split(" ");
let m = [];

for (let i = 0; i < arr.length; i++) {
  let str = arr[i];
  let capitalized = str[0].toUpperCase() + str.slice(1);
  m[i] = capitalized;
}

console.log(m.join(" ")); 
// Output: "Coding Is Fun When You Practice Consistently"
