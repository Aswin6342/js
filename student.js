const students = [
    { name: "Alice", score: 95, subject: "Math" },
    { name: "Bob", score: 67, subject: "Science" },
    { name: "Charlie", score: 82, subject: "English" },
    { name: "David", score: 74, subject: "History" },
    { name: "Eve", score: 58, subject: "Art" },
    { name: "Frank", score: 89, subject: "Physics" },
    { name: "Grace", score: 91, subject: "Biology" },
];

var score=students.filter((item)=>{
    return(item.score>70)
})

var s=score.map((item)=>{
    return(item.name);
})
console.log(s);

var grades=students.map((item)=>{
    let grade;
    if(item.score>90){
        item.grade="A";
    }
    else if(item.score>80){
        item.grade="B";
    }
    else if(item.score>70){
        item.grade="C";
    }
    else if(item.score>60){
        item.grade="D";
    }
    else{
        item.grade="F";
    }
    return {...students,grade};
})
console.log(grades);
// 3.Calculate the Total Score of All Students
var total=students.reduce((acc,item)=>{
    return acc+item.score;
}
,0)
console.log("total=",total);

// 4.Calculate the Average Score of Students
var avg=total/students.length;
console.log("avg=",avg);
// 5.Find Students Who Scored Above the Average Score 
var aboveAvg=students.filter((item)=>{
    return item.score>avg;
})

// 5.Find Students Who Scored Above the Average Score(the name only)
var aboveAvgNames=aboveAvg.map((item)=>{
    return item.name;
}
)
console.log("aboveAvgNames=",aboveAvgNames); 






