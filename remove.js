let a = [1, 2, 2, 3, 4, 4, 5];
let b = [];

for (let i = 0; i < a.length; i++) {
  let d = false;
  for (let j = 0; j < b.length; j++) {
    if (a[i] === b[j]) {
      d = true;
      break;
    }
  }
  if (!d) {
    b.push(a[i]);
  }
}


console.log(b); 
