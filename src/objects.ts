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
//maually printing it
console.log(str1.name);
console.log(str1.rollno);
console.log(str1.subjects);
console.log("After updating")
//updating it
str1.rollno=4
str1.subjects=["physics"]
//printing the updated object value

console.log(str1)

type teachers={
    name: string
    subject:string 
    department:string
}

const updateTeacher = (updates: Partial<Teacher>) => {
    console.log(updates);
};

updateTeacher({name:"saad"})