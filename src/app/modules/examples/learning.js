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

let p = new Promise((resolve, reject) => {
    // resolve('Resolved promise data');
    // reject('Rejected promise data');
    setTimeout(() => {
        resolve('resolved promise data!')
    }, 4300);
});

p.then(response => console.log(response))
.catch(error => console.log(error))

console.log('nesto sto treba da se izvrsi posle promisa');