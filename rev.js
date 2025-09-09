let rows=5;
let line="";
for(let i=rows; i>=1; i--){
    for(let j=1; j<=i; j++){
        line+=j;
    }
    line+="\n";
}
console.log(line);