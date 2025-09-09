let rows = 5;
for (let i = 1; i <= rows; i++) {
    let line = "";
   
    for (let j = 1; j <= rows - i; j++) {
        line += " ";
    }
   
    for (let k = 1; k <= 2 * i - 1; k++) {
        line += "*";
    }
    for (let j = 1; j <= rows - i; j++) {
        line += " ";
    }
      console.log(line);
}