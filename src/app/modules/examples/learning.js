//Block scoping (let and const)
// function hello() {
//     let message = "Hello";
//     console.log(message);
// }

// function greetings() {
//     let message = "Kako si?";
//     console.log(message);
// }

// hello();
// greetings();

//Temlpate literals
// let a = `good`;
// let greetings = `${a} morning`;
// console.log(greetings);

//Spred operator
// let nizPrvi = [1, 2, 3, 4];
// let nizDrugi = [...nizPrvi, 5, 6];
// console.log(nizDrugi);


// Rest parameters
// function collect(...a) {
//     console.log(a);
// }
// collect(1,3,35,5553, 'macka');

//Destructuring assignment on array and objects
// let someArray = [2, 4, 6 , 8];
//klasicno izvlacenje podataka
// let two = someArray[0];
// let eight = someArray[3];

//izvlacenje podataka sa destructuring
// let [two, four, test] = someArray;
// console.log(two, four, test);

// let zivotinje = ['Lav', 'Komarac', 'Guster'];
// let [sisar, insekt, gmizavac] = zivotinje;

// console.log(sisar, insekt, gmizavac);

// let kralj = {
//     ime: 'Petar',
//     deca: 3
// }
// Klasicni destructuring
// let ime = kralj.ime;
// let brojDece = kralj.deca;

//ES6 destructuring
// let { ime, deca } = kralj;
// console.log(ime, deca);

// let sin = {
//     imeOca: 'Aleksandar',
//     roditelji: 2
// }

// let imeOca, roditelji;

// ({imeOca, roditelji} = sin);

// console.log(imeOca, roditelji);


//Arrow functions examples 

// function cheer() {
//     console.log("Yuhuuuu");
// }

// cheer();

// var cheerAnonimna = function() {
//     console.log('Youhouu 2');
// }

// cheerAnonimna();

// setTimeout(function() {
//     console.log('Prikazi me za 4 sekunde');
// }, 4000);

// setTimeout(() => {
//     console.log('Prikazi me za 2 sekunde');
// }, 2000);

// let cheerWithArrowFn = () => {
//     console.log("Arrow function - Wohoooo");
// }

// cheerWithArrowFn();


//Arrow functions with Map and reduce

// let values = [10, 24, 30, 104005];

// let double = (n) => {
//     return n*2;
// }

// let doubled = values.map(double);//poziva double kao callback

// let doubled = values.map((n)=> {
//     return n * 2;
// }); //jednostavija upotreba za arrow funkcijama

//Jos kraci oblik
// let doubled = values.map((n) => n*2); // ovde uklanjamo {} i return jer arrow funkcija zna da treba da vrati vrednost
// console.log(doubled);

//Filter funkcije - prolaze originalni niz i vracaju novi niz koje odgovaraju uslovu 
// let points = [10, 3, 11, 12, 20, 5, 1];

// let highScores = points.filter((n) => n > 8);

// console.log(highScores);

//String helper methods
// let a = 'Juhu' + 'u'.repeat(100);
// let b = `Woh${"oOo".repeat(44)}`;
// console.log(a);
// console.log(b);

// console.log('Gravitacija'.startsWith('Gravi'))
// console.log('Gravitacija'.endsWith('cija'));
// console.log('Gravitacija'.includes('vita'));

//Klase i nasledjivanje
// class Animal {

//     constructor(ime, visina) {
//         this.ime = ime;
//         this.visina = visina;
//     }

//     hello() {
//         console.log(`Zdravo ja sam ${this.ime} iz carstva divljine!`);
//     }
// }

// let king = new Animal('Mufasa', 2.2);
// let quin = new Animal('Miranda', 1.3);

// king.hello();
// quin.hello();

// class Lion extends Animal {

//     constructor(ime, visina, boja) {
//         super(ime, visina);
//         this.boja = boja;
//     }

//     hello() {
//         console.log(`Ja sam ${this.ime} iz dzungle!`);
//     }
// }

// let son = new Lion('Simba', 1.23, 'zlatna');
// console.log(son);

// son.hello();

//Static methods
// koriste da bi imali pristup metodama bez kreiranja instance objekata
// class Calculator {

//     static multiply(a, b) {
//         return a * b;
//     }

//     static add(a, b) {
//         return a + b;
//     }
// }

// let multiply = Calculator.multiply(100, 42020);
// console.log(multiply);
// let add = Calculator.add(109219013, 450);
// console.log(add);

//Prototypes
// function Wizard(name, house, pet) {
//     this.name = name;
//     this.house = house;
//     this.pet = pet;

//     this.greet = () => {
//         return `I'm ${this.name} from ${this.house}.`;
//     }
// }

// let jovan = new Wizard("Jovan Ivezic", 'Petrovaradin', 'pas');
// console.log(jovan.greet());

//Data structures
//Set()
//store unique values
// sets prove adventageous in storing no duplicates


// let a = new Set();
// a.add('Cat');
// a.add(34);
// a.add(34);
// a.add(404);
// a.add({x: 10, y: 2020});
// console.log(a);
// console.log(a.has(404)); //true or false


// let numbers = [1, 3, 8, 55, 56];
// let numSet = new Set(numbers);
// console.log(numSet);

// for(el of numSet.values()) {
//     console.log(el);
// }

// let chars = 'dfjwefwoefjwoefjewofjfewfrwer';
// let chars_array = chars.split('');
// // console.log(chars_array);
// let chars_set = new Set(chars_array);
// console.log(chars_set);

// const contains = (word, letter) => {
//     let letters = word.split("");
//     // TODO create a set with the above 'letters' array
//     // TODO return whether the set has the 'letter'
//     let lettersSet = new Set(letters);
//     return lettersSet.has(letter)
// };

// let true_check = contains("west", "e");
// let false_check = contains("north", "e");
// console.log(true_check);
// console.log(false_check);

//Map()
// maps have keys and values
// maps hare much similarity to objects
// but maps beat objecs with superior keys, ans the size propery
// keys must be unique

// let a = new Map();

// let key_1 = 'String key';
// let key_2 = { a: 'key'};
// let key_3 = function(){};
// a.set(key_1, 'Return value for a string key');
// a.set(key_2, 'Return value for an object key');
// a.set(key_3, 'Return value for function key');
// console.log(a);

// let numberArray = [[1,'one'], [2,'two'], [3,'three']];
// let valueMap = new Map(numberArray);
// console.log(valueMap);

// for( let [key,value] of valueMap.entries()) {
//     console.log(`${key} points to ${value}.`)
// }
//koliko puta se odredjeno slov ponavlja
// let string = 'xdfeofjeofjeowfjeowfjewofjewoifjewoifj';

// let letters = new Map();

// for(let i = 0; i < string.length; i++) {
//     let letter = string[i];

//     if (letters.has(letter) == false) {
//         letters.set(letter, 1);
//     } else {
//         letters.set(letter, letters.get(letter)+1);
//     }
// }

// console.log(letters);

//Closures and scope
// let call = () => {
//     let secret = 'ES6 is great!';

//     let reveal = () => {
//         console.log(secret);
//     }
//     // reveal();
//     return reveal;
// }

// let closureCall = call();
// closureCall();


// let dodajSufiks = (x) => {

//     let spoji = (y) => {
//         return y + x;
//     }
//     return spoji;
// }

// let dodaj_ski = dodajSufiks('ski');
// let jovanov = dodaj_ski('Jovanov');
// console.log(jovanov);

// const product = (x) => {
//     return y => {
//         return y * x;
//     }
// }
//kraca verzija
// const product = x => y => y * x;

// let pomnoziSaPet = product(5);
// console.log(pomnoziSaPet(55));
// let dupliraj = product(2);
// console.log(dupliraj(200202));

// const addFactory = (x) => {
//     // TODO
//     // return an inner function with one parameter, y;
//     // the inner funcion returns x + y;
//     return (y) => {
//         return x + y;
//     }

//     // let innerFn = (y) => {
//     //     return x + y;
//     // }

//     // return innerFn;
// };

// const add50 = addFactory(50);
// const add30 = addFactory(30);
// console.log(add50(110));
// console.log(add30(40));


//Private methods
// const budget = () => {
//     let balance = 0;

//     let changeBalance = (val) => {
//         return balance += val;
//     }

//     const deposit20 = () => changeBalance(20);
//     // const deposit20 = () => {
//     //     return changeBalance(20);
//     // }

//     const witdraw20 = () => changeBalance(-20);

//     const checkBalance = () => {
//         console.log(balance);
//     }

//     // return {
//     //     deposit20: deposit20,
//     //     witdraw20: witdraw20,
//     //     checkBalance: checkBalance
//     // }

//     //ako su kljuc i vrednost isti u es6 mozemo napisati i ovako
//     return { deposit20, witdraw20, checkBalance}
// }

// let wallet = budget();
// console.log(wallet);
// wallet.deposit20();
// wallet.deposit20();
// wallet.deposit20();
// wallet.deposit20();
// wallet.deposit20();
// wallet.deposit20();
// wallet.witdraw20();
// wallet.checkBalance();
// console.log(wallet.balance); //nemamo pristup vrednosti zbog return

//ES6 generators
// function* letterMaker() {
//     yield 'a',
//     yield 'b',
//     yield 'c'
// }

// let letterGen = letterMaker(); // pravimo novu instancu bez new u ovom slucaju
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);

// function* countMaker() {
//     let count = 0;
//     while (count < 3) {
//         yield count +=1;
//     }
// }

// let countGen = countMaker();
// console.log(countGen.next().value);
// console.log(countGen.next().value);
// console.log(countGen.next().value);
// console.log(countGen.next().value);

// function* evens() {
//     let count = 0;

//     while (true) { //beskonacna petlja sa generatorom ne izbacuje gresku
//         count +=2;
//         let reset = yield count;

//         if (reset == true) {
//             count = 0;
//         }
//     }
// }

// let evenNumbers = evens();
// console.log(evenNumbers.next().value);
// console.log(evenNumbers.next().value);
// console.log(evenNumbers.next().value);
// console.log(evenNumbers.next().value);
// console.log(evenNumbers.next().value);
// console.log(evenNumbers.next().value);
// console.log(evenNumbers.next().value);
// console.log(evenNumbers.next().value);
// console.log(evenNumbers.next(true).value);
// console.log(evenNumbers.next().value);


//Primer iteratora i generatora (poredjenje koda)
// const arrayIterator = (array) => {
//     let index = 0;

//     let next = () => {
//         if (index < array.length) {
//             let next = array[index];
//             index += 1;
//             return next;
//         }
//     }

//     return {
//         next: next
//     }

//     //shorter version
//     // return {
//     //     next: () => {
//     //         if (index < array.length) {
//     //             let next = array[index];
//     //             index += 1;
//     //             return next;
//     //         }
//     //     }
//     // }
// }
// // console.log(arrayIterator([1, 4, 5]));
// let iterator = arrayIterator([1, 4, 5]);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// function* arrayIterator() {
//     // yield arguments; //imamo pristup argumentima preko arguments
//     // for (let arg of arguments) {
//     //     yield arg;
//     // }
//     yield* arguments; //umesto for petlje mozem koristiti yield*
// }

// let it = arrayIterator(1,3,4);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);

// let p = new Promise((resolve, reject) => {
//     // resolve('Resolved promise data');
//     // reject('Rejected promise data');
//     setTimeout(() => {
//         resolve('resolved promise data!')
//     }, 4300);
// });

// p.then(response => console.log(response))
// .catch(error => console.log(error))

// console.log('nesto sto treba da se izvrsi posle promisa');

// const url = 'https://jsonplaceholder.typicode.com/posts/1';
// const url2 = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';

// fetch(url2, {method: "GET"})
//     .then(response => response.json())
//     .then(json => console.log(json));

//Arrow functions
// const test = {
//     name: 'hello world',
//     createClassicFunction: function () {
//         return function () {
//             console.log(this.name);
//         };
//     },
//     createArrowFunction: function () {
//         return () => {
//             console.log(this.name);
//         };
//     }
// };

// const arrow = test.createArrowFunction();
// const classic = test.createClassicFunction();
// // arrow();
// // classic();

// var user = {
//     id: 122,
//     counter: function () {
//         setTimeout(function () {
//             console.log(this.id);
//         }, 3000);
//     },

//     counterArrow: function () {
//         setTimeout(() => {
//             console.log(this.id);
//         }, 3000);
//     }
// }

// user.counter();
// user.counterArrow();


//bind
// let user = {
//     name: 'Jovan',
//     talk: function() {
//         console.log(`Hello i am ${this.name}`);
//     }
// }
// user.talk();

// let talkFunction = user.talk;

// talkFunction();// this is undefined

// let boundTalkFunction = talkFunction.bind(user);
// boundTalkFunction();

// const Person = function(params) {
//     this.username = params.username;
//     this.firstName = params.firstName;
//     this.lastName = params.lastName;
// }

// Person.prototype = {
//     username: null,
//     firstName: null,
//     lastName: null
// }

// let user11 = new Person({
//     username: 'jovan_i',
//     firstName: 'Jovan',
//     lastName: 'Ivezic'
// });

// const PersonDetails = function(){};

// PersonDetails.prototype = {

//     getFullName: function() {
//         console.log(this.firstName + ' ' + this.lastName);
//     },

//     getDescription: function(detail1, detail2) {
//         console.log(this.firstName + ' ' + detail1 + ' | ' + detail2);
//     }
// }

// let call = new PersonDetails().getFullName.call(user11); // u prevodu pozovi getFullName funkciju i reci mi sta je this
// let apply = new PersonDetails().getDescription.apply(user11,['Live in Novi Sad', 'Occupation: Javascript programmer']);
// let bind = new PersonDetails().getFullName.bind(user11);
// bind();



// function a() {
//     function b() {
//         console.log(this);
//     }

//     var myVar = 2;

//     b();
// }

// var myVar = 1;

// a();
// function waitThreeSeconds() {
//     var ms = 3000 + new Date().getTime();
//     while (new Date() < ms) {};
//     console.log('Finished long function');
// }

// function clickHandler() {
//     console.log('Click event');
// }

// document.addEventListener('click', clickHandler);

// waitThreeSeconds();
// console.log('Finish global code execution');

// var Jovan = {
//     firstName: 'Jovan',
//     lastName: 'Ivezic'
// }

// function greet(person) {
//     console.log('Hello ' + person.firstName);
// }

// greet(Jovan);

// greet({firstName: "Petar", lastName: "Kapulica"});

// greet({firstName: 'Nemanja'});

// console.log(JSON.stringify(Jovan));

// var jsonString = JSON.parse('{ "firstName": "Jovan", "lastName": "Ivezic" }');
// console.log(jsonString);

// function functionObject() {
//     console.log('hi');
// }

// functionObject.language = 'english';

// functionObject();

// console.log(functionObject.language);

// function greeting() {
//     console.log('Greeting!');
// }

// greeting();


// // anonymusGreeting(); anonymus function exprssions cannot be hoisted (we will get an error here)

// var anonymusGreeting = function () {
//     console.log('Greeting!');
// }

// anonymusGreeting();

// function log(a) {
//     a();
// }

// log(function() {
//     console.log('Create function on the fly');
// });

// by value (primitives)
// var a = 3;
// var b;

// b = a; 
// a = 2;
// console.log(a);
// console.log(b);

//By reference (all objects(including functions))
// var c = {
//     greeting: 'hi'
// }
// var d;

// d = c;

// c.greeting = 'Hello'; //mutate
// console.log(c);
// console.log(d);

// by refernece (even as parameters)
// function changeGreeting(obj) {
//     obj.greeting = 'Hola'; //mutate
// }

// changeGreeting(d);
// console.log(c);
// console.log(d);

// equals operator sets up new memory space (new address)
// c = { greeting: 'Howdy' };

// console.log(c);
// console.log(d);

//Objects functions and this
// function a() {
//     console.log(this);
// }

// a();

// var b = function() {
//     console.log(this);
// }

// b();

// //object methods have reference to the object
// // but any internal function inside the method have reference to the global object
// var c = {
//     name: 'The c object',
//     log: function() {
//         // var self = this; // add reference to this object with self var
//         // self.name = 'Updated c object';

//         this.name = 'Updated c object';
//         console.log(this);

//         // var setName = function(newname) {
//         //     this.name = newname; //Here this is a global object
//         // }

//         // 1. solution - use an arrow function to solve this bug
//         var setName = (newname) => {
//             this.name = newname;
//         }

//         setName('Updated again! The c object');

//         console.log(this);
//     }
// }

// c.log();

//Arrays
// var arr = new Array();
//or
// var arr = [];
// var arr = [
//     1,
//     false,
//     {
//         name: 'Tony',
//         address: '221 Main St.'
//     },
//     function(name) {
//         var greeting = 'Hello ';
//         console.log(greeting + name);
//     },
//     'Hello'
// ]

// console.log(arr);
// arr[3](arr[2].name);

//Arguments and spread
// function greet(firstname, lastname, language) {
//     console.log(firstname);
//     console.log(lastname);
//     console.log(language);
// }
// greet(); //ako ne dodelimo ni jedan parametar nece biti greske 
// zbog hoistinga svi argumenti ce biti postavljeni na undefined

// function greet(firstname, lastname, language) {
//     language = language || 'es'; // ako je lang undefinded onda ce koristiti default 'es'
//     console.log(firstname);
//     console.log(lastname);
//     console.log(language);
//     console.log(arguments); //imamo dostupnu i rec arguments koja sadrzi niz svih argumenata
//     console.log('--------------------')
// }

// greet();
// greet('Jovan');
// greet('Jovan', 'Ivezic');
// greet('Jovan', 'Ivezic', 'sr');
//Spread parametar
// function greet(firstname, lastname, language, ...other) {
//     console.log(firstname);
//     console.log(lastname);
//     console.log(language);
//     console.log(other); //spread parametar uzima sve nove parametre i wrapuje ih u niz
//     console.log('--------------------')
// }

// greet('Jovan', 'Ivezic', 'sr', 'Nevesinje, Republika Srpska', '232902', 'Srbija');

//Syntax parsers - automaski dodaje ; ako ga zaboravimo
// function getPerson() {
//     return
//     {
//         name: 'Jovan'
//     }
// }

// console.log(getPerson()); //undefined zbog entera posle return. Interpretira return; i izadje iz funkcije

// function getPerson1() {
//     return {
//         name: 'Jovan'
//     }
// }

// console.log(getPerson1()); //vraca objekat

//IIFE
//Function statement
// function greet(name) {
//     console.log('Hello ' + name);
// };

// greet('Jovica');

// // using function expression
// var greeting = function(name) {
//     console.log('Hello ' + name);
// };

// greeting('Petronije');

// //Using IIFE
// var greetingIIFE = function(name) {
//     return 'Hello ' + name;   
// }('Josko');
// console.log(greetingIIFE);

// (function(name) {
//     console.log('Hello ' + name);
// }('Perica'));

//Closures

// function greet(whattosay) {
    
//     return function(name) {
//         console.log(whattosay + ' ' + name);
//     }
// }

// greet('Zdravo')('Jovane');

// var sayHi = greet('Hi');
// console.log(sayHi);
// sayHi('jovan');
// function buildfunctions() {
//     var arr = [];

//     for (var i = 0; i < 3; i++) {
//         arr.push(
//             function() {
//                 console.log(i);
//             }
//         )
//     }

//     return arr;
// }
// var fs = buildfunctions();

// fs[0]();
// fs[1]();
// fs[2]();

// //Rezultat svake funkcije je 3, jer je u buildfunctions zapamtila zadnju vrednost i = 3

// function buildFunctions2() {
    
//     var arr = [];

//     for (var i = 0; i < 3; i++) {
//         arr.push(
//             (function(j) {
//                 console.log(j);
//             }(i))
//         )
//     }
//     return arr;
// }

// var fs2 = buildFunctions2();

// fs2[0];
// fs2[1];
// fs2[2];

// //Sa IIFE imamo 3 execution contexta pri svakom pozivu funkcije pa je rezultat - 1, 2, 3

// function buildfunctions3() {
//     var arr = [];

//     for (var i = 0; i < 3; i++) {
//         let j = i;
//         arr.push(
//             function() {
//                 console.log(j);
//             }
//         )
//     }

//     return arr;
// }

// var fs3 = buildfunctions3();

// fs3[0]();
// fs3[1]();
// fs3[2]();

// Sa let imamo razlicitu vrednost varijable pri svakom pozivu funkcije

//Function factories
// function makeGreeting(language) {

//     return function(firstname,lastname) {
        
//         if (language === 'en') {
//             console.log('Hello ' + firstname + ' ' + lastname);
//         }

//         if (language === 'es') {
//             console.log('Hola ' + firstname + ' ' + lastname);
//         }
//     }
// }

// var greetingEnglish = makeGreeting('en');

// greetingEnglish('Jovan', 'Ivezic');

// var greetingSpanish = makeGreeting('es');

// greetingSpanish('Adriana', 'Lima');

//closures and callbacks
// function sayHiLater() {
//     var greeting = 'Hi!';

//     setTimeout(() => {
//         console.log(greeting);
//     }, 3000);
// }

// sayHiLater();

// function tellMeWhenDone(callback) {
//     var a = 100;
//     var b = 100;

//     callback();
// }

// tellMeWhenDone(function() {
//    console.log('Hiiiiii i am callback!'); 
// });

// tellMeWhenDone(function() {
//     alert('Yuhuuuuu');
// });

//Call, apply and bind
// var person = {
//     firstname: 'Jovan',
//     lastname: 'Ivezic',
//     getFullName: function() {

//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;

//     }
// }

// var person2 = {
//     firstname: 'Marko',
//     lastname: 'Ivezic',
//     getFullName: function () {

//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;

//     }
// }

// var person3 = {
//     firstname: 'Ana',
//     lastname: 'Antic'
// }

// var logName = function(lang1, lang2) {
//     console.log('Logged: ' + this.getFullName());
//     console.log('Arguments: ' + lang1 + ' ' + lang2);
//     console.log('----------------------');
// }

// //Bind metod vraca novu funkciju - kopiju funkcije
// var logPersonName = logName.bind(person); 

// //zbog toga ovde moramo da je pozovemo
// logPersonName();
// // logPersonName();

// var logName = function (lang1, lang2) {
//     console.log('Logged: ' + this.getFullName());
// }.bind(person2);

// logName();

// logName.call(person, 'es', 'en');
// logName.apply(person2, ['es', 'en']);

// //with IIFE
// (function(lang1, lang2) {
//     console.log('Logged: ' + this.getFullName());
//     console.log('Arguments: ' + lang1 + ' ' + lang2);
//     console.log('----------------------');
// }).apply(person, ['sr', 'ru']);

// //function borrowing
// console.log(person.getFullName.call(person3)); //pristupili smo objektu koji ima metod i odredili da this bude person3 objekat
// //dakle pozajmili smo metod sa drugog objekta i iskoristili ga
// //metod je funkcija tako da ima dostupne metode call, apply i bind

// //function currying
// function multiply(a, b) {
//     return a * b;
// }

// var multiplyByTwo = multiply.bind(this, 2);
// var multiplyByThree = multiply.bind(this, 3);

// // var multiplyByTwo = multiply.bind(this, 2, 1001); //ako prosledimo oba parametra imacemo uvek isti rezultat
// //ovo u prevodu radi sledece:
// // function multiplyByTwo(b) {
// //     var a = 2;
// //     return a * b;
// // }
// console.log(multiplyByTwo(104324230));//odve ce parametar biti ignorisan ako zakucamo vrednost za oba parametra.
// console.log(multiplyByThree(10));

//Functional programming
// function mapForEach(arr, fn) {
//     var newArr = [];
//     for(var i = 0; i < arr.length; i++) {
//         newArr.push(
//             fn(arr[i])
//         )
//     };
//     return newArr;
// }

// var arr1 = [1,3,4];

// var arr2 = mapForEach(arr1, function(item) {
//     return item * 2;
// });

// console.log(arr2);

// var arr3 = mapForEach(arr1, function (item) {
//     return item > 2;
// });

// console.log(arr3);

// var checkPastLimit = function(limiter, item) {
//     return item > limiter;
// }

// var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 3));
// console.log(arr4);

// var checkPastLimitSimplified = function(limiter) {
//     return function(limiter, item) {
//         return item > limiter;
//     }.bind(this, limiter);
// };

// var arr5 = mapForEach(arr1, checkPastLimitSimplified(34));
// console.log(arr5);

//Prototypes
// var person = {
//     firstname: 'Default',
//     lastname: 'Default',
//     getFullName: function() {
//         return this.firstname + ' ' + this.lastname;
//     }
// }

// var john = {
//     firstname: 'John',
//     lastname: 'Doe'
// }
// //ovo usporava app ne koristiti nikada (samo za demo)

// john.__proto__ = person;
// console.log(john.getFullName());
// console.log(john.firstname);

// var jane = {
//     firstname: 'Jane'
// }
// jane.__proto__ = person;
// console.log(jane.getFullName());

// // var a = {};

// // var b = function() {};
// // var c = [];
// // console.log(a.__proto__);
// // console.log(b.__proto__);
// // console.log(c.__proto__);

// // for (prop in john) {
// //     if (john.hasOwnProperty(prop)) {
// //         console.log(prop + ': ' + john[prop]);
// //     }
// // }

// function Person(firstname, lastname) {
//     console.log(this);
//     this.firstname = firstname;
//     this.lastname = lastname;
//     console.log('This function is invoked');

//     // return {
//     //     greet: 'hellow' // ako imamo return onda nece uraditi ovo iznad nego ovo
//     // }
// }



// //svaka funkcija kada koristimo funkciju kao function constructor ima property .prototype
// //po default je prazan objekat
// //.prototype nije prototip funkcije nego prototip svakog objekta koji smo kreirali

// console.log(Person.prototype);//empty object na koji mozemo da kacimo metode ili properties

// Person.prototype.getFullName = function() {
//     return this.firstname + ' ' + this.lastname;
// }

// var john = new Person('John', 'Ivezic'); //new ispred poziva funkcije kreira potpuno novi objekat
// // rec this se odnosi na njega

// var jane = new Person('Jane', 'Ivezic'); // i ovde imamo novi objekat

// console.log(john);
// console.log(jane);

// console.log(jane.getFullName());

// Person.prototype.getFormalFullName = function () {
//     return this.lastname + ', ' + this.firstname;
// }
// //preporuka je metode ne dodavati u function constructor nego na prototip
// //razlog je efikasnije koriscenje memorijskog prostora
// // ovde na prototipu imamo samo jedan metod za sve objekte umesto da imamo 1000 kopija za hiljadu objekata

// console.log(jane.getFormalFullName());

// //Build in Function Constructors
// var a = new Number(2);
// var b = new String('Johnm'); // dobijamo novi objekat sa svim dostupnim metodama
// var c = new Date();
// //dodajemo novi metod na ugradjeni String objekat
// String.prototype.isLengthGreaterThan = function(limit) {
//     return this.length > limit;
// }

// console.log('Jovan'.isLengthGreaterThan(21));//john string se konvertuje u objekat i automatski ima dostupan metod

// Number.prototype.isPositive = function() {
//     return this > 0;
// }
// console(3.isPositive()); //izbacice gresku jer ne radi konverziju brojeva automatski (samo string)
//ali ako uradimo
// var g = new Number(10);
// console.log
// (g.isPositive());

//for in loop u ovom slucaju dodaje jos jedan property na Array ( pa treba biti oprezan pri upotrebi)
// Array.prototype.myCustomFeature = 'Cool';

// var array = ['Jovan', 'Mirjana', 'Tadej', 'Rastko', 'Nestor'];

// console.log(array);

// for (prop in array) {
//     console.log(prop + ': ' + array[prop]);
// }

//Object.create and Pure Prototypal Inheritence

// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
// var person = {
//     firstname: 'Default',
//     lastname: 'Default',
//     greet: function() {
//         return 'Hi ' + this.firstname + ' ' + this.lastname;
//     }
// }

// var john = Object.create(person); //ovde dobijamo prazan objekat sa prototipom koji sadrzi vrednosti iz person objekta
// john.firstname = 'John';
// john.lastname = 'Doe'; //dodajuci vrednosti na instancu jednostavno mutiramo vrednosti iz prototipa
// john.greet();
// console.log(john);
// console.log(john.greet());

//Polyfill for browser that not support object.create
// if (!Object.create) {
//     Object.create = function(obj) {
//         if (arguments.length > 1) {
//             throw new Error('Object.create implementation only accepts the first parameter.')
//         }
//         function F() {};
//         F.prototype = obj;
//         return new F();
//     } 
// }

//Callbacks and Promises
// function doTask(task, callback) {
//     console.log('Started ' + task + '!');
//     setTimeout(callback, 3000);
// }

// function finished() {
//     console.log("Finished my task after 3 seconds")
// }

// doTask('cleaning', finished);

//Creating a promise
// It takes a callback function with two parameters, 
// a resolve function and a reject function.
// const success = true;
// const promise = new Promise((resolve, reject) => {

//     if (success) {
//         const results = {
//             message: 'This was a success!'
//         }

//         resolve(results);
//     } else {
//         const results = {
//             message: 'This faild!'
//         }

//         reject(results);
//     }
// });

// promise.then(success => {
//     console.log(success.message);
// }).catch(error => {
//     console.log(error.message);
// });

// When you use the then function, it receives the value passed in to the resolve function.
// Likewise, the catch function receives the value passed into the reject function. 

// Promises only have three possible states they can be in:

// Pending: A pending Promise hasn't begun its operations yet.
// Fulfilled: When a promise resolves after its operations finished.
// Rejected: When a promise fails to complete its operations successfully.

//Async and await
// async function apiSuccess() {
//     const results = {
//         message: 'This was a success!'
//     }

//     return results;
// }
//The above code is the equivalent to this:
// function apiSuccess() {
//     const results = {
//         message: 'This was a success!'
//     }

//     return Promise.resolve(results);
// }

// //for errors
// async function apiFailiture() {

//     const results = {
//         message: 'This faild!'
//     }
//     throw new Error(results);
// }

// function apiFailiture() {
    
//     const results = {
//         message: 'This faild!'
//     }

//     return Promise.reject(results);
// }

//Await
// The await keyword is used with asynchronous functions to ensure that all the promises 
// are completed and synchronized.This can help remove the need to use callbacks via.then() 
// and.catch().Here's an example:

// async function getAPIData(url) {
//     try {
//         let response = await fetch(url);
//         let data = await response.json();
//         // console.log(data);
//         return data;
//     } catch (error) {
//         // catches errors in all async functions
//         // console.log(error);
//         return error;
//     }
// }
// let url = "https://jsonplaceholder.typicode.com/todos/1";
// getAPIData(url);

// // Finally, if you want to call an async function from a non - async function, 
// // you can use the then method.Here's an example:
// function printAPIData(url) {
//     getAPIData(url).then(result => {
//         console.log(result);
//     });
// }

// printAPIData(url);


// new Promise((resolve, reject) => {
//     console.log('Initial');

//     resolve();
// })
// .then(() => {
//     throw new Error('Something failed');
//     console.log('Do this');
// })
// .catch(() => {
//     console.error('Do that');
// })
// .then(() => {
//     console.log('Do this, no matter what happened before');
// });

// const promise1 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve('foo');
//     }, 300);
// });

// promise1.then(function (value) {
//     console.log(value);
//     // expected output: "foo"
// });

// console.log(promise1);
// expected output: [object Promise]

// function myAsyncFunction(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()
//         xhr.open("GET", url)
//         xhr.onload = () => resolve(xhr.responseText)
//         xhr.onerror = () => reject(xhr.statusText)
//         xhr.send()
//     });
// }

// myAsyncFunction('https://jsonplaceholder.typicode.com/posts/2');
// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Success!');
//     }, 5000);
// });

// myPromise.then((successMessage) => {
//     console.log('Yay! ' + successMessage);
// });

//Simple promise example
// let p = new Promise((resolve, reject) => {
//     let a = 1 + 2;

//     if (a === 2) {
//         resolve('Success!');
//     } else {
//         reject('Failed!');
//     }
// });

// p.then((message) => {
//     console.log('Promise is resolved. Write success message: ' + message);
// })
// .catch((message) => {
//     console.log('Promise is rejected. Write rejected message: ' + message);
// });

//classic callback 
// const userLeft = false;
// const userWatchingCatMeme = true;

// function callbackExample(callback, errorCallback) {
    
//     if (userLeft) {
//         errorCallback({ 
//             name: 'User left', 
//             message: ':(' 
//         });
//     } else if (userWatchingCatMeme) {
//         errorCallback({ 
//             name: 'User watching Cat Meme', 
//             message: ':('
//         });
//     } else {
//         callback('Thumbs up and subscribe!');
//     }
// }

// callbackExample((message) => {
//     console.log('Success ' + message)
// }, (error) => {
//     console.log(error.name + ' ' + error.message);
// });

//Callback rewritten in Promise
// function promiseExample() {
//     return new Promise((resolve, reject) => {
//         if (userLeft) {
//             reject({
//                 name: 'User left',
//                 message: ':('
//             });
//         } else if (userWatchingCatMeme) {
//             reject({
//                 name: 'User watching Cat Meme',
//                 message: ':('
//             });
//         } else {
//             resolve('Thumbs up and subscribe!');
//         }
//     });
// }

// promiseExample().then((message) => {
//     console.log('Success ' + message);
// }).catch((error) => {
//     console.error(error.name + ' ' + error.message);
// });

//Async await
// function slowAsyncFunction() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(console.log(2));
//         }, 3000);
//     })
// }

// function regularFunction() {
//     console.log(1);
//     slowAsyncFunction();
//     console.log(3);
// }

// async function asyncAwaitFunction() {
//     console.log(1);
//     await slowAsyncFunction();
//     console.log(3);
// }

// regularFunction(); // 1,3,2
// asyncAwaitFunction(); // 1,2,3

//Fetch

/* Fetch
JavaScript can send network requests to the server and load new information whenever is needed.

For example, we can use a network request to:
Submit an order,
    Load user information,
    Receive latest updates from the server,
    …etc.

    let promise = fetch(url, [options])

    url – the URL to access.
    options – optional parameters: method, headers etc.
*/
// (async () => {
//     let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';

//     let response = await fetch(url);
//     // console.log(response.headers.get('Date'));

//     if (response.ok) { // if HTTP-status is 200-299
//         // get the response body (the method explained below)
//         let json = await response.json();
//         console.log(json);
//     } else {
//         alert("HTTP-Error: " + response.status);
//     }
// })();

// fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
//     .then(response => response.json())
//     .then(arrayofcommits => {
//         console.log(arrayofcommits[0].commit);
//     });

// (async () => {
//     let response = await fetch('https://miro.medium.com/proxy/0*UzaG_alYU6vQ8MIt.jpg');

//     let blob = await response.blob(); // download as Blob object

//     // create <img> for it
//     let img = document.createElement('img');
//     img.style = 'position:fixed;top:10px;left:10px;width:100px';
//     document.body.append(img);

//     // show it
//     img.src = URL.createObjectURL(blob);

//     setTimeout(() => { // hide after 5 seconds
//         img.remove();
//         URL.revokeObjectURL(img.src);
//     }, 5000);
// })();

// (async () => {
//     let user = {
//         name: 'Jovan',
//         surname: 'Ivezic'
//     };

//     let response = await fetch('//javascript.info/article/fetch/post/user', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//         },
//         body: JSON.stringify(user)
//     });

//     let result = await response.json();
//     console.log(result)
// })();
/*
Create an async function getUsers(names), that gets an array of GitHub logins, fetches the users from GitHub and returns an array of GitHub users.

The GitHub url with user information for the given USERNAME is: https://api.github.com/users/USERNAME.

    There’s a test example in the sandbox.

Important details:

There should be one fetch request per user.
Requests shouldn’t wait for each other.So that the data arrives as soon as possible.
If any request fails, or if there’s no such user, the function should return null in the resulting array.

*/
// let users = await getUsers(['iliakan', 'remy', 'no.such.users']);
// let gitUsers = ['jovan-ivezic', 'remy', 'no.such.users'];
// async function getUsers(names) {
//     let jobs = [];
//     debugger;

//     for(let name of names) {
//         let job = fetch(`https://api.github.com/users/${name}`).then(
//             successResponse => {
//                 if (successResponse.status != 200) {
//                     return null;
//                 } else {
//                     return successResponse.json();
//                 }
//             },
//             failResponse => {
//                 return null;
//             }
//         );
//         jobs.push(job);
//     }

//     let results = await Promise.all(jobs);
//     // console.log(results);
//     return results;
// }
// getUsers(gitUsers);

class User {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }
}

let jovan = new User('Jovan Ivezic');
alert(typeof jovan);
console.log(jovan.sayHi());