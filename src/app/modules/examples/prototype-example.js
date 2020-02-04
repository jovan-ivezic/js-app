export default class PrototypeExample {

    constructor() {
        this.user = {
            type: null,

            init: function(type) {
                this.type = type;
            },

            speak: function() {
                console.log(`I am ${this.type}`);
            }
        }
    }

    run() {
        this.createUser();
        this.createAdminAndSuperAdmin();
        this.overrideType();
        this.overrdeSpeakMethod();
        this.checkPrototype();
    }

    createUser() {
        this.user.init('guest');
        this.user.speak();
    }

    createAdminAndSuperAdmin() {
        const admin = Object.create(this.user);
        admin.init('admin');
        admin.speak();

        const superAdmin = Object.create(this.user);
        superAdmin.init('superadmin');
        superAdmin.speak();
        // alert(Object.getPrototypeOf(this.user) === admin);
        console.log(this.user.isPrototypeOf(admin)); 
        console.log(this.user.isPrototypeOf(superAdmin)); 
    }

    overrideType() {
        const admin = Object.create(this.user);
        this.user.type = 'New type';
        admin.speak(); // i am overriden new type
    }

    overrdeSpeakMethod() {
        const admin = Object.create(this.user);
        this.user.speak = function() {
            console.log(`I am overriden ${this.type}`);
        }

        admin.init('admin');
        admin.speak();
    }

    checkPrototype() {
        const admin = Object.create(this.user);
        admin.init('admin');
        console.log(this.user.isPrototypeOf(admin));
        console.log(this.user.isPrototypeOf('something else'));
        console.log(Object.getPrototypeOf(this.user));
    }
}