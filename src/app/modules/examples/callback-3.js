export default class Callback3 { 

    // The purpose of async / await is to simplify using promises synchronously, 
    //and to perform some behavior on a group of Promises. 
    //As Promises are similar to structured callbacks, async / await is similar to 
    //combining generators and promises.

    constructor() {
    }

    run() {
        this.stupid();
    }

    stupidOne() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(console.log(1));
            }, 3000);
        })
    }

    stupidTwo() {
        console.log(2);
    }

    async stupid() {
        console.log('hi, i dont need callback');
        await this.stupidTwo();
        this.stupidOne();
    }

}