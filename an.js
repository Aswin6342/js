let a = "hello";
let b = "lleho";

if (a.length === b.length) {
  let a1 = a.split("");
  let b1 = b.split("");

  for (let i = 0; i < a1.length - 1; i++) {
    for (let j = 0; j < a1.length - 1 - i; j++) {
      if (a1[j] > a1[j + 1]) {
        let temp = a1[j];
        a1[j] = a1[j + 1];
        a1[j + 1] = temp;
      }
    }
  }

  for (let i = 0; i < b1.length - 1; i++) {
    for (let j = 0; j < b1.length - 1 - i; j++) {
      if (b1[j] > b1[j + 1]) {
        let temp = b1[j];
        b1[j] = b1[j + 1];
        b1[j + 1] = temp;
      }
    }
  }
  console.log(a1);
  console.log(b1);
  
  
  
  let isAnagram = true;
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== b1[i]) {
      isAnagram = false;
      break;
    }
  }

  if (isAnagram) {
    console.log("Anagram ");
  } else {
    console.log("Not anagram ");
  }
} else {
  console.log("Not anagram ");
}