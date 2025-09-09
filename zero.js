let arr = [0, 0, 1, 0, 3, 0, 5, 0];
let n = arr.length;
let count = 0;
for (let i = n-1; i >=0; i--) {
  if (arr[i] == 0) {
    arr.splice(i, 1);
    count++;
  }
}
for(let i=0;i<count;i++){
    arr.push(0);
    }
console.log(arr);
console.log(count);
