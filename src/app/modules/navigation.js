'use strict';

var Navigation = function() {
    this.init();
    this.openLastSeenPage();
}

Navigation.prototype = {

    onLinkClick: function(e) {
        let url = this.getUrl(e);
        this.setUrl(url);
        this.changeContent(url);
    },

    getUrl: function(e) {
        e.preventDefault();
        let link = e.target;

        return {
            linkHref: link.getAttribute('href'),
            linkText: link.innerHTML
        }
    },

    setUrl: function(clickedLink) {
        history.pushState({page: clickedLink.linkText}, clickedLink.linkText, clickedLink.linkHref);
        window.localStorage.setItem('clickedLink', JSON.stringify(clickedLink));
    },

    init: function() {
        let links = document.querySelectorAll('.js-nav-link');

        links.forEach((el) => {
            el.addEventListener('click', (e) => this.onLinkClick(e));
        });
    },

    changeContent: function(clickedLink) {
        let contentHolder = document.getElementById('js-content');
        fetch('views/partials'+clickedLink.linkHref+'.hbs', {mode: 'no-cors'})
        .then(response => response.text())
        .then(data =>  {
            contentHolder.innerHTML = data;
        })
        .catch(error => console.error(error));
    },

    openLastSeenPage: function() {
        if(localStorage.length) {
            let link = JSON.parse(window.localStorage.getItem('clickedLink'));
            console.log(link);
            this.setUrl(link);
            this.changeContent(link);
        }
    }
}

new Navigation();
