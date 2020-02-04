export default class About {

    run() {
        this.fetchAuthors();
    }

    fetchAuthors() {
        const ul = document.getElementById('authors');
        const url = 'https://randomuser.me/api/?results=20';

        fetch(url)
            .then(response => response.json())
            .then((data) => {
                let authorsArray = data.results;
                return authorsArray.map((author) => {
                    this.parseHtml(ul,
                        `<li>
                            <img src="${author.picture.large}"/>
                            <span>${author.name.first} ${author.name.last}, ${author.location.country}</span>
                        </li>`
                    )
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    //el = targeted element, html = markup
    parseHtml(el, html) {
        el.insertAdjacentHTML('afterbegin', html.trim());
    }
}