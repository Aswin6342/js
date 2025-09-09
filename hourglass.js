let n = 5;
let line = "";

for (let i = n; i >= 1; i--) {
    for (let j = 0; j < n - i; j++) {
        line += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        if (k === 0 || k === 2 * i - 2 || i === n) {
            line += "*";
        } else {
            line += " ";
        }
    }
    line += "\n";
}

for (let i = 2; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
        line += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        if (k === 0 || k === 2 * i - 2 || i === n) {
            line += "*";
        } else {
            line += " ";
        }
    }
    line += "\n";
}

console.log(line);