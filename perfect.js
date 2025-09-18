let a = [];
let sum = 0;
function factors(no) {
  for (let i = 0; i < no; i++) {
    if (no % i == 0) {
      a.push(i);
    }
  }
  for (let j = 0; j <= a.length - 1; j++) {
    sum = sum + a[j];
  }

if(sum == no){
    console.log("perfect");
    }
    else{
    console.log("not perfect");
    }
}
factors(28);
