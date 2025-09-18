let s = "malayala";
let r = "";
for (let i = s.length - 1; i >= 0; i--) {
  let t = s[i];
  r = r + t;
}
console.log(r);

if (s == r) {
  console.log("palindrome");
}
else{
    console.log("not palindrome");
    
}
