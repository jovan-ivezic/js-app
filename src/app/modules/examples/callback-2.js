export default class Callback2 { 

    constructor() {
    }

    run() {
        this.stupidOne(this.stupidTwo);
    }

    stupidOne(callback) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(console.log(1));
                callback();
            }, 3000);
        })
    }

    stupidTwo() {
        console.log(2);
    }

}