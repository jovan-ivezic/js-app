export default class ArrowFunction {

    constructor() {
        // this.init();
    }

    init() {
        var materijali = ['bakar', 'olovo', 'cink'];
        console.log(materijali.map(materijal => materijal.length));
    }
}

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
let nizPrvi = [1, 2, 3, 4];
let nizDrugi = [...nizPrvi, 5, 6];
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

let sin = {
    imeOca: 'Aleksandar',
    roditelji: 2
}

let imeOca, roditelji;

({imeOca, roditelji} = sin);

console.log(imeOca, roditelji);
