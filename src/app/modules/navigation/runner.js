import {
    LINKS
} from './constants'

export default class Navigation {

    constructor() {
        this.init();
        // this.openLastSeenPage();
    }

    init() {
        let links = document.querySelectorAll(LINKS);

        links.forEach((el) => {
            el.addEventListener('click', (e) => this.onLinkClick(e));
        });
    }

    onLinkClick(e) {
        let url = this.getUrl(e);
        this.setUrl(url);
        this.changeContent(url);
    }

    getUrl(e) {
        e.preventDefault();
        let link = e.target;

        return {
            linkHref: link.getAttribute('href'),
            linkText: link.innerHTML
        }
    }

    setUrl(clickedLink) {
        history.pushState({page: clickedLink.linkText}, clickedLink.linkText, clickedLink.linkHref);
        window.localStorage.setItem('clickedLink', JSON.stringify(clickedLink));
    }

    changeContent(clickedLink) {
        let contentHolder = document.getElementById('js-content');
        fetch('templates/partials'+clickedLink.linkHref+'.hbs', {mode: 'no-cors'})
        .then(response => response.text())
        .then(data =>  {
            contentHolder.innerHTML = data;
        }).catch(error => console.error(error));
    }

    openLastSeenPage() {
        if(localStorage.length) {
            let link = JSON.parse(window.localStorage.getItem('clickedLink'));
            // console.log(link);
            this.setUrl(link);
            this.changeContent(link);
        }
    }
}