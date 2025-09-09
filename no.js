let a = [10, 20, 30, 40];
let x = 30;
let f = false;

for (let i = 0; i < a.length; i++) {
  if (a[i] === x) {
    f = true;
    break;
  }
}

if (f) {
  console.log(x + " exists in the array");
} else {
  console.log(x + " does not exist in the array");
}
