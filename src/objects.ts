type student ={
    name : string;
    rollno: number;
    subjects:string[];
}

const str1:student={
    name:"Ali",
    rollno:1,
    subjects: ["english","maths","urdu"]
}

console.log(str1.name);
console.log(str1.rollno);
console.log(str1.subjects);