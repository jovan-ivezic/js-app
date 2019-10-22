'use strict';

var Form = function() {
    this.formSelector = document.getElementById('js-contact-form');
    this.formSelector.addEventListener('submit', this.submit.bind(this));
}

Form.prototype = {

    submit: function(e) {
        e.preventDefault();

        fetch('https://reqres.in/api/users', {
          method : 'post',
          body: new FormData(this.formSelector)
        })

        .then(function(response) {
           return response.text();
        })

        .then(function(text) {
            console.log(text);
        })

        .catch(function (error) {
            console.error(error);
        })
    }
}

new Form();