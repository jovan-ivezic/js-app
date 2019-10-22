//Module revealning pattern
var User = function() {
    var userId = 12;
    var password = 'secret';

    function getPassword() {
        return password;
    }

    function nextId() {
        return userID++;
    }

    return {
        id: userId,
        getNexId: nextId
    }
};

new User();

//Closures

var user = 'Jovo';

function helloUser() {
    console.log("Hello " + user);
}

helloUser();