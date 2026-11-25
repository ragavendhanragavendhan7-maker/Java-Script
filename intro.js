
// ! 1.var keyword

var sname; // ! variable.decleration
sname = "Raghav"; // ! variable.intialization
console.log(sname);

var sage = 13; // ! variable.decleration and ! variable.intialization
console.log(sage);

var sage =15;// ! variable.reintialization
console.log(sage);



// ! 2.let keyword

let ename; // ! variable.decleration

ename = "Raghul"; // ! variable.intialization

console.log(ename);

let eage = 13; // ! variable.decleration and ! variable.intialization

console.log(eage);

// let ename; cannot redeclared

console.log("\t\t variable in javascript");

//! primitive datatype

//! 1.number
 let sal = 10000.90;
 let age = 155;

 console.log(sal);
 console.log(age);
//! "typeof" is used to find the datatype
 console.log(typeof sal) //number
 console.log(typeof age) //number

 //! 2.String
 let company = "infosys";
 console.log(company)
 console.log(typeof company)
//! "typeof" is used to find the datatype
 let company1 ='TCS';
 console.log(company1)
 console.log(typeof company1)
// `back tick`- use of this we have multiline string
 let aboutEmp =`he is hard working 
 on sitting company girls`
 console.log(aboutEmp)
 console.log(typeof aboutEmp)

 //! string interpolation / template literals

 let num1 =10
 let num2 =20
 let sum =num1 + num2;

 console.log(`addition of ${num1} and ${num2} is ${sum}`)

 //! 3.boolean

 let isplayer =false
 let ismarried = true

 console.log(typeof isplayer)
 console.log(typeof ismarried)

//! 4.undefined

let name 
console.log(name) //undefined
console.log(typeof name) //undefined

// ! 5.null

let phno = null;

console.log(typeof phno) //object
console.log(phno) //null

//! 6. bigint 

let tooMuchsal = 1234567964675456n
console.log(typeof tooMuchsal) 
console.log(tooMuchsal)

//! Non-primitive datatype

// 1.function/method 2. array 3.object

//! const

const pi = 3.14 // we cannot reasign and redeclared

console.log(pi)