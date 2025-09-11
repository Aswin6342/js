let sentence = "coding is FUN when you practice consistently";

let w = sentence.split(" "); 


for (let i=0;i<=w.length-1;i++) {
    var longest =w[0];
  if (w[i].length > longest.length) {
    longest = w[i];  
  }
}
console.log(longest);



