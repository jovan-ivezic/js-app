export default class localStorage {

    constructor() {
        this.run()
    }

    run() {

        const person = {
            name: 'Jovan',
            id: 22
        }

        window.localStorage.setItem('user', JSON.stringify(person));
        JSON.parse(window.localStorage.getItem('user'));

        window.localStorage.setItem('user_id', '22');
        window.localStorage.getItem('user_id'); //22
        window.localStorage.removeItem('user_id');
        window.localStorage.clear(); //clears all

    }
}