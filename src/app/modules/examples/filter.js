export default class Filter {

    constructor(users) {
        this.users = users;
    }

    run() {
        console.log(this.findDevsWithForLoop());
        console.log(this.findDevsWithFilter());
        var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
        const result = words.filter((word) => {
            return word.length <= 5;
        });
        console.log(result);
    }

    findDevsWithForLoop() {
        var developers = [];

        for (var i=0; i < this.users.length; i++) {
            
            if(this.users[i].position === 'developer') {
                developers.push(this.users[i]);
            }
        }

        return developers;
    }

    findDevsWithFilter() {
        return this.users.filter(this.isDeveloper);
    }

    isDeveloper(user) {
        return user.position === 'developer';
    }
}