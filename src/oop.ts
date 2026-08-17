class student{
    name:string;
    age:number;
    
 constructor(name: string, age: number) {
        console.log(`I am ${name}, my age is ${age}`);
    }
}
console.log("output of simple class")
const str= new student("Ali",21);


 class teacher{
    name:string;
     age:number;

 constructor(name: string, age: number) {
        console.log(`I am ${name}, my age is ${age}`);
        this.name=name;
        this.age=age;
   } }
   console.log("output of class using this key word")
const tr=new teacher ("saad",44)

console.log(str.name)

class parentstuent{
    name : string; 

    constructor(name:string){}

    interduce(){
        console.log(`i am ${this.name}`)
    }
}

class csstudent extends parentstuent{
       language:string;
 constructor(name:string,language:string){
    super(name);
    this.language=language;

 }
}

const str3 = new csstudent("Ali", "TypeScript");
str3.interduce();
console.log(str3.language);

class s{
    static school="UMT"

    constructor(public name:string){
  console.log(`i am ${name}`);
  this.name=name;
    }
}
const s1= new s("ali");
const s2 = new s("saad")

console.log(s1.name,s.school)
console.log (s2.name,s.school)