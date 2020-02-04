export default class DestructuringExample {

    constructor() {

    }

    run() {
        let user1 = {
            username: 'Guest23234342',
            firstname: 'Josko',
            lastname: 'Boskovic'
        }
        this.logUserDetails(user1);
        this.destructureArray();

        const user2 = {
            id: 22,
            username: 'Guest22',
            age: 30,
            attributes: {
                hair: 'blue'
            }
        }

        this.logUserDetails2(user2);
    }

    logUserDetails({firstname, lastname = 'unknown'}) {
        console.log(`${firstname} ${lastname}`);
    }

    logUserDetails2({id, username}) {
        console.log(`${id} ${username}` );
    }

    destructureArray() {
        let arrayOfWords = ['this', 'is', 'my', 'sententce'];
        let [,,,fourth] = arrayOfWords;
        let [first,second] = arrayOfWords;
        console.log(fourth);
        console.log(first, second);
    }

}