let n = 5; 

for (let i = 0; i < n; i++) {
  let row = '';
  let c = 1;
  
  for (let s = 1; s < n - i; s++) {
    row += "  ";
  }

  for (let j = 0; j <= i; j++) {
    if (j === 0 || i === 0) {
      c = 1;
    } else {
      c = c * (i - j + 1) / j;
    }
    row += c + '   ';
  }
  console.log(row);
}                   