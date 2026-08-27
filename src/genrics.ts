function getvalue<T>(value:T):T{
return value;

}

const name=getvalue<string>("Ali");
const age=getvalue<number>(21);

console.log(name);
console.log(age);
