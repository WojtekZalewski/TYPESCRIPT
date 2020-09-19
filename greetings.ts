function greeter(person){
    return "Hello, " + person;
}
let user01 = "Jane User";
document.body.textContent=greeter(user01);

//in terminal: tsc greeter.tsc
//annotiations - adnotacje

function greeter01(person: string){
    return "Hello, " + person;
}
let user02 = [0,1,2];
document.body.textContent = greeter(user02);

//error

interface Person {
    firstName: string;
    lastName: string;
}

function greeter02(person: Person) {
    return "Hello, " + person.firstName + "" + person.lastName;
}

let user03 = {firstName: "Jane", lastName: "User"};
document.body.textContent = greeter(user03);

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

//private - access inside class
//public - access outside class

interface Person {
    firstName: string;
    lastName: string;
}
function greeter04(person: Person){
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = new Student("Jane", "M", "User");
document.body.textContent = greeter(user);

//07.05.2020 - TypeScript3.7