let rows = 5;
let line = "";
for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
        line += " ";
    }

    for (let k = rows; k >= i; k--) {
       if(i==1 || k==i || k==rows){
        line += " *";
       }
       else{
        line+="  ";
       }
       
    }
    line += "\n";
}
console.log(line);