console.log('Hello World');

let name = 'Prajul';
let age=20;
let person = {
    name: 'Prajul',
    age: 30
};

delete person.name;

person.name='John';
let selection='name';
person[selection]='Prajul';
console.log(person);

let sc=['red','blue'];
sc[2]=1;
console.log(sc.length);

let number=1;
function greet(nametwo)
{
    console.log('Hello '+nametwo);
}

greet('John');

function square(number){
    return number*number;
}

console.log('Hello');

let myvar=87;
myvar++;

let myvarTwo=98;
myvarTwo--;

let quotient=4.0/2.2;
console.log(quotient);

let myStr="I am a \"double quoted\" string insdie \"double quotes\"";
console.log(myStr);

let myStrTwo='<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStrTwo);

console.log(myStr+myStrTwo);

let ourStr="I come first. ";
ourStr+="I come second."
console.log(ourStr);

let anAdjective="awesome!";
let ourStrTwo="We are ";
ourStrTwo+=anAdjective;
console.log(ourStrTwo);

l=ourStrTwo.length;
console.log(l);

b=ourStrTwo[0];
console.log(b);

let str="Jello World";
str="Hello World";
console.log(str);

console.log(str[str.length-1]);

let ourArray=[1,2,3,4,5,6];
ourArray[0]=0;
console.log(ourArray);

let ourArrayTwo=[["The universe",42],["Everything",1010011]];
console.log(ourArrayTwo);
console.log(ourArrayTwo[0][0]);
ourArrayTwo.push(['dog',2432]);
console.log(ourArrayTwo);
ourArrayTwo.pop();
console.log(ourArrayTwo);
ourArrayTwo.shift();
console.log(ourArrayTwo);
ourArrayTwo.unshift(["The world",32]);
console.log(ourArrayTwo);

function reusable(){
    console.log("Sup bro");
}
reusable();
reusable();
reusable();

function withArgs(a,b){
    console.log(a+b);
}
withArgs(10,5);

function compareEquality(a,b){
    if(a==b){
        return "equal";
    }
    return "not equal";
}
let x=10,y=20;
console.log(compareEquality(x,y));

function orderMyLogic(val){
    if(val<5)
    {
        return "Less than 5";
    }
    else if(val<10)
    {
        return "Less than 10";
    }
    else
    {
        return "Greater than or equal to 10";
    }
}

console.log(orderMyLogic(3));

vam=3;
switch(vam){
    case 1:
    case 2:
    case 3:
        answer="low";
        break;
    case 4:
    case 5:
    case 6:
        answer="high";
        break;
}

console.log(Math.random()*50);
console.log(Math.floor(Math.random() *20));

function convertToInteger(str) {
    return parseInt(str,10);
}
console.log(convertToInteger("74"));

function convertToBin(str) {
    return parseInt(str,2);
}
console.log(convertToBin("1001111001"));

function checkSign(num) {
    return num>0?"positive":num<0?"negative":"zero";
}
console.log(checkSign(0));

function freezeObj(){
    "use strict";
    const MATH_CONSTANTS ={
        PI: 3.14
    };
    
    Object.freeze(MATH_CONSTANTS);

    try{
        MATH_CONSTANTS.PI=99;
    }
    catch(ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI=freezeObj();