let currentNum = 1;
let result = "";

for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += currentNum;
        currentNum++;
    }
    result += row + "\n";
}

console.log(result);
