export default class Data {

    static getUsers() {
        return [
            {
                name: 'John',
                age: 33,
                position: 'CEO',
                salary: 5000
            },
            {
                name: 'Marry',
                age: 34,
                position: 'CFO',
                salary: 4000
            },
            {
                name: 'Mike',
                age: 22,
                position: 'CTO',
                salary: 3000
            },
            {
                name: 'Ann',
                age: 27,
                position: 'developer',
                salary: 2000
            },
            {
                name: 'Ben',
                age: 55,
                position: 'developer',
                salary: 3000
            },
            {
                name: 'Lisa',
                age: 43,
                position: 'developer',
                salary: 2500
            }
        ]
    }

    static getMessageCounts() {
        return [
            { total: 366 },
            { total: 431 },
            { total: 213 },
            { total: 421 }
        ]
    }

}