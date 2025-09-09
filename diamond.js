let rows = 4;
let line = "";

for (let i = rows; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    line += " ";
  }

  for (k = i; k <= rows; k++) {
    if (i == rows || k == i || k == rows) {
      line += " *";
    } else {
      line += "  ";
    }
  }
  line += "\n";
}
// console.log(line);
/* <second> */
for (let i = 2; i <= rows; i++) {
  for (let j = 1; j <= i; j++) {
    line += " ";
  }

  for (let k = rows; k >= i; k--) {
    if (k == i || k == rows) {
      line += " *";
    } else {
      line += "  ";
    }
  }
  line += "\n";
}
console.log(line);
