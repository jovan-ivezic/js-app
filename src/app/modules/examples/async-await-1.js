export default class AsyncAwait1 {

    constructor() {
        this.usersUrl = 'https://randomuser.me/api/?results=3';
        this.userUrl = 'https://randomuser.me/api/?email=';
    }

    run() {
        this.fetchUserAsync().then((result) => {
            console.log(result);
        });

        //classic way
        // this.fetchUsers().then((result) => {
        //     console.log(result);
        // });
    }

    fetchUsers() {
    return fetch(this.usersUrl)
        .then((response) => response.json())
        .then(users => {
            const promises = users.results.map(user => 
                fetch(this.userUrl + user.email)
                    .then(response => response.json())
                    .then(userData => userData['results'][0].email)
            )
            return Promise.all(promises)
        })
    }

    async fetchUserAsync() {
        const response = await fetch(this.usersUrl);
        console.log(response);
        const users = await response.json();
        let userUrl = this.userUrl;
        return await Promise.all(users.results.map(async (user) => {
            const response = await fetch(userUrl + user.email);
            const userData = await response.json();
            return userData['results'][0].email;
        }));
    }
}