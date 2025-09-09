let n = 4;
let line = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) line += " *";

  for (let j = 1; j <= 2 * (n - i); j++) line += "  ";

  for (let j = 1; j <= i; j++) line += " *";
  line += "\n";
}
// console.log(line);


for (let i = n-1; i >= 1; i--) {
  for (let j = 1; j <= i; j++) line += " *";

  for (let j = 1; j <= 2 * (n - i); j++) line += "  ";

  for (let j = 1; j <= i; j++) line += " *";
  line += "\n";
}
console.log(line);