const a = ["s1", "s2", "s3", "s4", "s5", "a1"];
let len = a.length;

console.log("Original:", a);

let c=[...a]
const b = c.reverse();

console.log("Reversed:", b);

let isPalindrome = true;

for (let i = 0; i < len; i++) {
    if (b[i] !== a[i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}