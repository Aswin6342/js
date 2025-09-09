let a = ['cat', 'car', 'bear', 'cab'];
let b = [];


for (let i = 0; i < a.length; i++) {
  if (a[i][0] == 'c' && a[i][1] == 'a') {
    b.push(a[i]);
  }
}
console.log(b);
