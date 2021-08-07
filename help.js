
let Name = prompt("Give Your Last Name");
let age = prompt ("Give The Age")
document.getElementById('html').innerHTML = 'I Am'+ ' '+ Name + ' ' + 'I am' + ' '+ age + ' ' + 'years old';
console.log('I Am'+ ' '+ Name + ' ' + 'I am' + ' '+ age + ' ' + 'years old');

/* Data Types */

//Arrays
let phone = ['Samsung' , 'Apple' , 'Oneplus'];
phone[2] = 'Nokia';
phone[3] = 'Symphone';
document.getElementById('sakib').innerHTML = phone[2];
console.log(phone);

// Boolean
let smartphone = ['Samsung' , 'Apple' , 'Oneplus'];
let mobile = ['Samsung' , 'Apple' , 'Oneplus'];
document.getElementById('riad').innerHTML = (smartphone == mobile);
console.log(smartphone);

//String
let Laptop = ('MacBookPro');
document.getElementById('rimu').innerHTML = Laptop;
console.log(Laptop);

//Number
let number = (14 + 5);
document.getElementById('full').innerHTML = number;
console.log(number);

//Object
let Desktop = {
    storage: '1TB',
    RAM: '16GB',
    Processor: 'i3',
};
Desktop.Processor = 'i5';
document.getElementById('Desktop').innerHTML = Desktop.RAM;
console.log(Desktop);


/*Operator Precedence*/

let now = 2021;
let sakibAge = 13;
let fullAge = 21;
let rimuAge = 25;

let isFullAge = now - sakibAge >= fullAge;
let average =  (sakibAge) + rimuAge / 2

document.getElementById('age').innerHTML = average;
console.log(average);

/*Function*/

//67 Number line defines argument
//64 Number line defines parameter
//argument defines the parameter


function hello(firstname){
    console.log('Hello World' + firstname);
}

hello(' , My Friend');

function math(number , digit){
    return number + digit;
}

console.log(math(15271 , 10))

/*Events*/
//This is a system that tells webpage when to trigger the function


function riad(){
    document.write('Hello World')
}
riad

/*Math*/

console.log(Math.round(159));
console.log(Math.pow(12,5));
console.log(Math.sqrt(144));
console.log(Math.abs(254));

/*Boolean*/
//Value That works in javascript

let numOne = 'Sakib';

console.log(Boolean(numOne))

/*Condition*/

let time = new Date().getHours();

if(time>= 6 && time < 12){
    console.log('Good Morning')
}
else if (time >=12 && time < 6){
    console.log('Good Afternoon')
}
else {
    console.log('Good Evening')
}