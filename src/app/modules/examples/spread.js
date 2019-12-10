// Summary
// When we see "..." in the code, it is either rest parameters or the spread operator.

// There’s an easy way to distinguish between them:

// When ...is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.
// When ...occurs in a function call or alike, it’s called a “spread operator” and expands an array into a list.
// Use patterns:

// Rest parameters are used to create functions that accept any number of arguments.
// The spread operator is used to pass an array to functions that normally require a list of many arguments.

//Spred opeartor and rest parameters
export default class Spread {
    constructor() {
        this.run();
    }

    run() {
        this.combineArrays();
        console.log(this.sumAll(1,4,5,2));
        this.copyArray();
        this.stringToArray();
        this.destructuring();
        this.withoutApply();
    }

    combineArrays() {
        let combinedArray = [1,2, ... [3,4],5,6];
        console.log(combinedArray);
    }

    sumAll(...args) {
        let sum = 0;

        for(let arg of args) {
            sum += arg;
        }

        return sum;
    }

    copyArray() {
        let arrayOfLetters = ['a','g','a'];
        let copyArrayOfLetters = [...arrayOfLetters];
        copyArrayOfLetters.push('d');
        console.log(copyArrayOfLetters);
        console.log(arrayOfLetters);
        // arrayOfLeters remains unaffected
    }

    stringToArray() {
        let string = '140239ur02r03jr023qf';
        let array = [...string];
        console.log(array);
    }

    destructuring() {
        let { a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40, e: 1000 };
        a; // 10 
        b; // 20 
        rest; // { c: 30, d: 40 }
        console.log(a);
        console.log(b);
        console.log(rest);
    }

    withoutApply() {
        function doSomething(x,y,z) {
            console.log(x,y,z);
        }
        let args = [1,3,4,5,6,7,9];
        doSomething(args);
    }
}