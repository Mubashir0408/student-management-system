class student{
    name:string;
    age:number;
    
 constructor(name: string, age: number) {
        console.log(`I am ${name}, my age is ${age}`);
    }
}

const str= new student("Ali",21);


 class teacher{
    name:string;
     age:number;

 constructor(name: string, age: number) {
        console.log(`I am ${name}, my age is ${age}`);
        this.name=name;
        this.age=age;
   } }
const tr=new teacher ("saad",44)

console.log(str.name)