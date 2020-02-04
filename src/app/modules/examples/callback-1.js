export default class Callback1 {

    constructor() {}

    run() {
        this.logUser(this.getUserMessages);
    }

    logUser(callback) {
        setTimeout(() => {
            console.log('User logged.')
            callback();
        }, 3000);
    }

    getUserMessages() {
        console.log('User inbox fetched');
    }

}