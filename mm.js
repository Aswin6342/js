const arr = [1,3,7,9]; 
let n = arr.length + 1; 
let a1=arr[0];
let an=arr[arr.length-1];
let d=(an-a1)/(n-1);
let actual=0;
sum=n*(a1+an)/2;
for(let i=0;i<arr.length;i++){
    actual+=arr[i];
}
let m = sum - actual;
console.log("Missing number:",m);
