'use strict';

var Gallery = function() {
    //create gallery markup
    this.createGalleryHtml();

    let galleryContainer = document.getElementById('js-gallery-modal');
    let galleryItem = document.querySelectorAll('.js-gallery-item');
    let nextButton = document.getElementById('js-arrow-next');
    let prevButton = document.getElementById('js-arrow-prev');

    //open gallery
    galleryItem.forEach(el => {
        el.addEventListener('click', this.openGallery.bind(this));
    });
    //close gallery
    galleryContainer.addEventListener('click', this.closeGallery.bind(this));
    //show next item
    nextButton.addEventListener('click', this.getNextItem.bind(this));
    //show prev item
    prevButton.addEventListener('click', this.getPrevItem.bind(this));
}

Gallery.prototype = {
    gallery: 'js-gallery-modal',
    modalImage: 'js-modal-img',
    close: 'js-close',
    totalItems: document.querySelectorAll('.js-gallery-item').length,

    createGalleryHtml: function() {

        this.parseHtml(
            '<div class="gallery-modal-content">' +
                '<a href="javascript:;" id="js-arrow-prev" class="js-arrow-prev arrow arrow-prev"></a>' +
                '<img id="js-modal-img">' +
                '<a href="javascript:;" id="js-arrow-next" class="js-arrow-next arrow arrow-next"></a>' +
                '<a href="javascript:;" id="js-close" class="js-close close"></a>' +
            '</div>'
        );

        this.setIndex();
    },

    setIndex: function() {
        var galleryItems = document.querySelectorAll('.js-gallery-item');
        galleryItems.forEach((item,index) => {
            item.setAttribute('data-index', index);
        });
    },

    parseHtml: function(html) {
        var el = document.createElement('div');
        el.setAttribute('id', 'js-gallery-modal');
        el.classList.add('gallery-modal');
        el.innerHTML = html.trim();
        document.body.appendChild(el);
    },

    openGallery: function(e) {
        e.preventDefault();
        let currentImgIndex = e.target.dataset.index;
        let getClickedImageSrc = e.target.currentSrc;
        let galleryImg = document.getElementById('js-modal-img');
        galleryImg.setAttribute('src', getClickedImageSrc);
        galleryImg.setAttribute('data-index', currentImgIndex);
        let gallery = document.getElementById(this.gallery);
        gallery.style.display = 'flex';
    },

    closeGallery: function(e) {
        let clickedEl = e.target;
        let clickedElId = e.target.id;

        if (clickedElId === this.gallery || clickedElId === this.close) {
            document.getElementById(this.gallery).style.display = 'none';
        }
    },

    normalizePosition: function(position) {
        if (position >= this.totalItems) {
            position = 0;
        } else if (position < 0) {
            position = this.totalItems - 1;
        }

        return position;
    },

    getCurrentActivePos: function() {
        let currentOpenedImage = document.getElementById(this.modalImage);
        let currentOpenedImageIndex = currentOpenedImage.getAttribute('data-index');
        return Number(currentOpenedImageIndex);
    },

    getNextItem: function() {
       this.setItemPos(this.getCurrentActivePos() + 1);
    },

    getPrevItem: function() {
        this.setItemPos(this.getCurrentActivePos() - 1);
    },

    setItemPos: function(position) {
        let newPositionToSet = this.normalizePosition(position);
        let modalImage = document.getElementById(this.modalImage);
        let newItemSrc = document.querySelector('[data-index = "' + newPositionToSet +'"]').getAttribute('src');
        modalImage.setAttribute('data-index', newPositionToSet);
        modalImage.setAttribute('src', newItemSrc);
    }
}

new Gallery();

// export default class CallbackExample1  {

//     constructor() {

//     }

//     run() {
//         this.logUser(this.getUserMessages);
//     }

//     logUser(callback) {
//         setTimeout(function () {
//             console.log('user logged');
//             callback();
//         }, 3000);
//     }

//     getUserMessages() {
//         console.log('user inbox fetched');
//     }

// }