let s = "glory has more glory than lary";
let w = s.split(" "); 
let m = 0; 
let r = ""; 

for (let i = 0; i < w.length; i++) {
  let c = 0;
  for (let j = 0; j < w.length; j++) {
    if (w[i] === w[j]) {
      c++;
    }
  }
  if (c > m) {
    m = c;
    r = w[i];
  }
}

console.log("Most frequent word:", r, "=>", m);
