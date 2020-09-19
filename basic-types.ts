let isDone: boolean = false;
let decimal: number = 6
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blue";
color = "red";

let fullName: string = "Bob Bobbington";
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}`;
let petname: string = "Fafik";
let command: string = `${petname} fe!`;
//I'll be ${age+1} years old next month;

let list: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];
let array: number[]=[0,1,2];
let myArray: Array<number>=[1,2,3];

//tuple - allow allow express an array with fixed number with elements with known types

let tuple: [string, number];
tuple = ["hello", 10];

console.log(tuple[0].substring(1));

enum Color {Red, Green, Blue};
//Any

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

let notSure01: any = 4;

notSure.ifItExists();
notSure().toFixed();

let prettySure: Object = 4;

//for mixed content arrays:

let list01: any[] = [1, true, "free"]
list[1] = 100;

let mixedArray: any[] = [6, 7, "ok", true];
//void - little like opposite of any
//void - unieważnić

function warnUser(): void {
    console.log("this is my warning messagge");
}
//assign to void only null or undefined
//void = null or undefined

let unsuable: void = undefined;
let u: undefined = undefined;
let n: null = null;

//never - represents type of value never accur(dokładny)

function error(messagge: string): never {
throw new Error(messagge);
}
function fail() {
    return error("smth failded");
}
function infiniteLoop():never{
    while(true){

    }
}

//object - represents non-primitive type
declare function create(o: object | null):void;
create(null);
//assertions - twierdzenia
//type assertions - are way to tell compiler "trust me I know what Im doing"

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let someValue01: any - "this is as tring"
let strLength01: number = (someValue as string).length;

//let add in ES2015 i.e. ES6, let safer than var. Use let whenever possible.
//entity - jednostka
// type assertions summary
//one way:

let sampleText: any = "My sample text";
let textLength: number = (<string>someValue).length;
//second way:

let someText: any = "this is a string";
let strLength02: number = (someValue as string).length;