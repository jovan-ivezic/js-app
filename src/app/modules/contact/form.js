export default class Contact {

    constructor() {
        const formSelector = document.getElementById('js-contact-form');
        formSelector.addEventListener('submit', this.submitFormData.bind(this));
    }

    submitFormData(e) {
        e.preventDefault();

        fetch('https://reqres.in/api/users', {
            method: 'POST',
            body: new FormData(this.formSelector)
        })
        .then(response => response.json())
        .catch(error => error);
    }
}