import {
    GALLERY,
    GALLERYITEM,
    CLOSE,
    MODALIMAGE
} from './constants'

export default class Gallery {

    constructor() {
        this.init();
    }

    init() {
        this.createGalleryHtml();

        //open gallery
        let galleryItem = document.querySelectorAll('.js-gallery-item');
        galleryItem.forEach((el) => {
            el.addEventListener('click', this.openGallery);
        });

        let galleryContainer = document.getElementById(GALLERY);
        let nextButton = document.getElementById('js-arrow-next');
        let prevButton = document.getElementById('js-arrow-prev');

        //close gallery - two ways
        // galleryContainer.addEventListener('click', (e) => this.closeGallery(e));
        galleryContainer.addEventListener('click', this.closeGallery.bind(this));
        //show next item
        nextButton.addEventListener('click', (e) => this.getNextItem(e));
        //show prev item
        prevButton.addEventListener('click', (e) => this.getPrevItem(e));
    }

    openGallery(e) {
        e.preventDefault();
        let currentImgIndex = e.target.dataset.index;
        let getClickedImageSrc = e.target.currentSrc;
        let galleryImg = document.getElementById(MODALIMAGE);
        galleryImg.setAttribute('src', getClickedImageSrc);
        galleryImg.setAttribute('data-index', currentImgIndex);
        let gallery = document.getElementById(GALLERY);
        gallery.style.display = 'flex';
    }

    totalItems() {
        return document.querySelectorAll(GALLERYITEM).length;
    }

    createGalleryHtml() {

        this.parseHtml(
            '<div id="js-gallery-modal" class="gallery-modal">' +
                '<div class="gallery-modal-content">' +
                    '<a href="javascript:;" id="js-arrow-prev" class="js-arrow-prev arrow arrow-prev"></a>' +
                    '<img id="js-modal-img">' +
                    '<a href="javascript:;" id="js-arrow-next" class="js-arrow-next arrow arrow-next"></a>' +
                    '<a href="javascript:;" id="js-close" class="js-close close"></a>' +
                '</div>' +
            '</div>',
            document.body
        );

        this.setIndex();
    }

    setIndex() {
        var galleryItems = document.querySelectorAll(GALLERYITEM);
        galleryItems.forEach((item, index) => {
            item.setAttribute('data-index', index);
        });
    }

    parseHtml(html, el) {
        el.insertAdjacentHTML('afterbegin', html.trim());
    }

    closeGallery(e) {
        let clickedElId = e.target.id;

        if (clickedElId === GALLERY || clickedElId === CLOSE) {
            document.getElementById(GALLERY).style.display = 'none';
        }
    }

    normalizePosition(position) {
        if (position >= this.totalItems()) {
            position = 0;
        } else if (position < 0) {
            position = this.totalItems() - 1;
        }
        return position;
    }

    getCurrentActivePos() {
        let currentOpenedImage = document.getElementById(MODALIMAGE);
        let currentOpenedImageIndex = currentOpenedImage.getAttribute('data-index');
        return Number(currentOpenedImageIndex);
    }

    getNextItem() {
        this.setItemPos(this.getCurrentActivePos() + 1);
    }

    getPrevItem() {
        this.setItemPos(this.getCurrentActivePos() - 1);
    }

    setItemPos(position) {
        let newPositionToSet = this.normalizePosition(position);
        let modalImage = document.getElementById(MODALIMAGE);
        let newItemSrc = document.querySelector('[data-index = "' + newPositionToSet + '"]').getAttribute('src');
        modalImage.setAttribute('data-index', newPositionToSet);
        modalImage.setAttribute('src', newItemSrc);
    }
};