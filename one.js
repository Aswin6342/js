let rows=5;
let line="";
for(i=1;i<=rows;i++){
    for(j=1;j<=i;j++){
        if((i+j)%2==0){
            line+="1";
        }
        else{
            line+="0";
        }
    }
    line+="\n";
}
console.log(line);

