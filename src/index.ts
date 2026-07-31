type Student = {
    name: string;
    id: number;
    age: number;
    cgpa: number;
    department: Department;
    marks: [number, number, number];
};
const students: Student[] = [];

enum Department{
    CS,
    AI,
    SE,
    IT
}

const st1:Student ={
    name:"mubashir",
    id:1,cgpa:3.3,
    age:21,
    department:Department.CS,
    marks:[46,44,77]
};
const st2:Student={
    name:"ali",
    id:2,
    cgpa:3.5,
    age:21,
    department:Department.SE,
    marks:[22,33,44]
};
const st3:Student={
    name:"saad",
    id:3,
    cgpa:3.2,
    age:21,
    department:Department.AI,
    marks:[22,33,44]
};
const st4:Student={
    name:"asad",
    id:4,
    cgpa:3.5,
    age:21,
    department:Department.IT,
    marks:[44,55,66]
};
const st5:Student={
    name:"furqan",
    id:5,
    cgpa:3.5,
    age:21,
    department:Department.IT,
    marks:[77,88,99],
};

function showStudents() {
    for (const student of students) {
        console.log(student.name);
        console.log(student.id);
        console.log(student.cgpa);
        console.log(student.age);
        console.log(student.department);
        console.log(student.marks);
    }
}

showStudents();

function addStudent(student: Student) {
    students.push(student);
}
function searchById(id: number) {
    for (const student of students) {
        if (student.id === id) {
            console.log(student);
        }
    }
}

function deleteStudent(id: number) {
    for (let i = 0; i < students.length; i++) {
        const student = students[i];

        if (student && student.id === id) {
            students.splice(i, 1);
            break;
        }
    }
}
function updateCgpa(id: number, newCgpa: number) {
    for (const student of students) {
        if (student.id === id) {
            student.cgpa = newCgpa;
            break;
        }
    }
}
function highestCgpa() {
    if (students.length === 0) {
        console.log("No students found.");
        return;
    }

    let highest = students[0]!;

    for (const student of students) {
        if (student.cgpa > highest.cgpa) {
            highest = student;
        }
    }

    console.log(highest);
}
addStudent(st1);
addStudent(st2);
addStudent(st3);
addStudent(st4);
addStudent(st5);
showStudents();

searchById(3);

updateCgpa(3, 3.9);

showStudents();

deleteStudent(2);

showStudents();
console.log(students.length);
highestCgpa();