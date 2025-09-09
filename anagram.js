const a1=["a","c","b","d"];
const a2=["d","b","a","c"];
for(let i=0;i<a1.length;i++){
    if(a1[i]>a1[i+1]){
        let t=a1[i];
        a1[i]=a1[i+1];
        a1[i+1]=t;
    }
}
console.log(a1);
for(let i=0;i<a2.length;i++){
    if(a2[i]>a2[i+1]){
        let t=a2[i];
        a2[i]=a2[i+1];
        a2[i+1]=t;
    }
}
console.log(a2);


// let c=1;
// for(let i=0;i<a1.length;i++){
//     if(a1[i]!==a2[i]){
//         c=0;
//         console.log("Not anagram");
//          break;
//         break;
//     }
   

// }
// if(c==1){
//     console.log("Anagram");
// }
