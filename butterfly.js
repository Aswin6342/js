let rows = 5;
let line = "";
for (let i = 1; i <= rows-1; i++) {
  for (j = 1; j <= i; j++) {
    line += " *";
  }
  for(k=rows;k>=i;k--){
    if(i==rows){
        line+="*";
    }
    else{
    line+="  # ";
    }
  }
  for (w = 1; w <= i; w++) {
    line += "* ";
  }

  line += "\n";
}
// for(i=1;i<=4;i++){
//     line+=" *";
// }
// line+="  *";
// for(i=1;i<=4;i++){
//     line+=" *";
// }
console.log(line);


