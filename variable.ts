var a = 10;

function f() {
    var message = "Hello, world";
    return message;
}

function f01() {
    var a = 10;
    return function g() {
        var b = a+1;
        return b;
    }
}
var g = f01();
g(); 

//returns '11'

///000

function f02() {
    var a = 1;
    a = 2;
    var b = g();
    a = 3;
    return b;
    function g(){
        return a;
    }
}
xq
f02();

//return 2

function f03(){
    var z = 2;
    z = 4;
    var x = ga();
    z = 3;
    return z;
    function ga(){
        return z;
    }
}

f03();

//3


function f04(){
    var a = 1;
    a = 2;
    var b = g();
    a = 3;
    return b;
    function g(){
        return a;
    }
}
f04();

function f05(shouldInitialize: boolean){
    if(shouldInitialize){
        var x = 10;
    }
    return x;
}
f05(true);
f05(false);

function func(isGood: boolean){
    if(isGood){
        var x = 10;
    }
    return x;
}

func(true);

//10

func(false);

//undefined