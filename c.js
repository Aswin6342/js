let rows=5;
let line="";
for(let i=1; i<=rows; i++){
    for(let j=rows; j>=i; j--){
        line+="  ";
    }
    for(let k=1; k<=i; k++){
        line+=" *";
    }
    line+="\n";
}
console.log(line);