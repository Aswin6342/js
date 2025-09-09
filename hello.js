let rows = 5;
let line = "";
var m = 1;

for (let i = 1; i <= rows; i++) {
   
    for (let j = 1; j <= i; j++) {
        line += " " + m;
        m++;
    }
    line += "\n";
    
}

console.log(line);
