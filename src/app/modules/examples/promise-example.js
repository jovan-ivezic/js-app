export default class PromiseExample {

    constructor() {
        this.image1 = 'https://picsum.photos/id/10/400/400';
        this.image2 = 'https://picsum.photos/id/11/400/400';
        this.image3 = 'https://picsum.photos/id/12/400/400';
    }

    run() {
        // this.runWithPromise();
        this.runWithCallback();
    }

    runWithPromise() {
        Promise.all([
            this.loadImageWithPromise(this.image1),
            this.loadImageWithPromise(this.image2),
            this.loadImageWithPromise(this.image3)
        ]).then((images) => {
            console.log(images);
            images.forEach((img) => {
                this.insertInHtml(img);
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    loadImageWithPromise(url) {
        return new Promise((resolve, reject) => {
            let image = new Image();
            image.onload = function() {
                resolve(image);
            }
            image.onerror = function() {
                reject(new Error('failed to load image from: ' + url));
            }
            image.src = url;
        });
    }

    loadImageWithCallback(url, callback) {
        let image = new Image();
        image.onload = function() {
            callback(image);
        }
        image.onerror = function() {
            callback(new Error('failed to load image from: ' + url));
        }
        image.src = url;
    }

    runWithCallback() {
        this.loadImageWithCallback(this.image1, (image1, err) => {
            if (err) throw err;
            this.insertInHtml(image1);

            this.loadImageWithCallback(this.image2, (image2, err) => {
                if (err) throw err;
                this.insertInHtml(image2);

                this.loadImageWithCallback(this.image3, (image3, err) => {
                    if (err) throw err;
                    this.insertInHtml(image3);
                });
            })
        });
    }

    insertInHtml(image) {
        let imageElement = document.createElement('img');
        imageElement.src = image.src;
        document.body.appendChild(imageElement);
    }
}