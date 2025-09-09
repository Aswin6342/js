let rows=5;
let line="";
for(i=1;i<=rows;i++){
    for(j=rows;j>=i;j--){
        line+=" ";
    }
    for(k=i;k>=1;k--){
        line+="*";
    }
    for(z=2;z<=i;z++){
        line+="*";
    }
    
    line+="\n";
}
console.log(line);
for(i=4;i>=1;i--){
    for(j=rows;j>=i;j--){
        line+=" ";
    }
    for(k=i;k>=1;k--){
        line+="*";
    }
    for(z=2;z<=i;z++){
        line+="*";
    }
    
    line+="\n";
}
console.log(line);