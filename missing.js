const arr = [1, 2, 3, 5, 6]; 
let n = arr.length + 1; 
let s = 0;
for (let i = 1; i <= n; i++) {
    s += i;
}
let a = 0;

for (let i = 0; i < arr.length; i++) {
    a += arr[i];
}

let m = s - a;
console.log("Missing number:", m);
