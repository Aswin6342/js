let rows=5;
let line="";
for(i=1;i<=rows;i++){
    for(j=rows;j>=i;j--){
        line+=" ";
    }
    for(k=i;k>=1;k--){
        line+=k;
    }
    for(z=2;z<=i;z++){
        line+=z;
    }
    
    line+="\n";
}
console.log(line);
