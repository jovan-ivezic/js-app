export default class ProtoExample {

    constructor() {
        
    }

    run() {
        // this.example1();
        this.example2();
    }

    example1() {
        let user = {
            type: 'admin'
        }
        let myUser = {
            name: 'john'
        }
        
        Object.setPrototypeOf(myUser, user);
        console.log(myUser.name);
        console.log(myUser.type);
        console.log(user.__proto__);
        console.log(myUser.__proto__);
        console.log(myUser);

        user.site = 'hotincontri.it';
        console.log(myUser.__proto__);
        console.log(myUser.site);
    }

    example2() {
        function User() {
            
        }
        User.prototype = {
            type: 'admin'
        }

        let user1 = new User();

        console.log(user1.type);
        console.log(user1.prototype); //undefined!
        console.log(user1.__proto__);

        let user = {};
        console.log(user.prototype); //undefined!
        console.log(user.__proto__);
    }

    
}