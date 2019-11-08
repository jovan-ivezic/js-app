'use strict';

var Navigation = function() {
    this.init();
}

Navigation.prototype = {

    onLinkClick: function(e) {
        let url = this.getUrl(e);
        this.setUrl(url);
    },

    getUrl: function(e) {
        e.preventDefault();
        let link = e.target;

        return {
            linkHref: link.getAttribute('href'),
            linkText: link.innerHTML
        }
    },

    setUrl: function(linkData) {
        history.pushState({page: linkData.linkText}, linkData.linkText, linkData.linkHref);
    },

    init: function() {
        let links = document.querySelectorAll('.js-nav-link');

        links.forEach((el) => {
            el.addEventListener('click', (e) => this.onLinkClick(e));
        });
    },

    changeContent: function(object) {
        fetch('views/partials/about.hbs', {mode: 'no-cors'})
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }
}

new Navigation();
