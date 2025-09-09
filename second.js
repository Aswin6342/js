let a = [12, 35, 1, 10, 34, 1];
let l = null; 
let s = null; 

for (let i = 0; i < a.length; i++) {
  let c = a[i];

  if (l === null || c > l) {
    s = l;
    l = c;
  } else if ((s === null || c > s) && c < l) {
    s = c;
  }
}

console.log("Second largest number is:", s);
