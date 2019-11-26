import {
    GALLERY,
    GALLERYITEM,
    CLOSE,
    MODALIMAGE
} from './constants'

export default class Gallery {

    constructor() {
        //create gallery markup
        console.log('usao u gallery class');
        this.createGalleryHtml();

        let galleryContainer = document.getElementById('js-gallery-modal');
        let galleryItem = document.querySelectorAll('.js-gallery-item');
        let nextButton = document.getElementById('js-arrow-next');
        let prevButton = document.getElementById('js-arrow-prev');
        console.log(galleryItem);
        //open gallery
        galleryItem.forEach(el => {
            console.log(el);
            el.addEventListener('click', this.openGallery.bind(this));
        });
        //close gallery
        galleryContainer.addEventListener('click', this.closeGallery.bind(this));
        //show next item
        nextButton.addEventListener('click', this.getNextItem.bind(this));
        //show prev item
        prevButton.addEventListener('click', this.getPrevItem.bind(this));
    }

    totalItems() {
        return document.querySelectorAll('.js-gallery-item').length;
    }

    createGalleryHtml() {

        this.parseHtml(
            '<div class="gallery-modal-content">' +
                '<a href="javascript:;" id="js-arrow-prev" class="js-arrow-prev arrow arrow-prev"></a>' +
                '<img id="js-modal-img">' +
                '<a href="javascript:;" id="js-arrow-next" class="js-arrow-next arrow arrow-next"></a>' +
                '<a href="javascript:;" id="js-close" class="js-close close"></a>' +
            '</div>'
        );

        this.setIndex();
    }

    setIndex() {
        var galleryItems = document.querySelectorAll('.js-gallery-item');
        galleryItems.forEach((item,index) => {
            item.setAttribute('data-index', index);
        });
    }

    parseHtml(html) {
        var el = document.createElement('div');
        el.setAttribute('id', GALLERY);
        el.classList.add('gallery-modal');
        el.innerHTML = html.trim();
        document.body.appendChild(el);
    }

    openGallery(e) {
        console.log('open method init');
        e.preventDefault();
        let currentImgIndex = e.target.dataset.index;
        let getClickedImageSrc = e.target.currentSrc;
        let galleryImg = document.getElementById(MODALIMAGE);
        galleryImg.setAttribute('src', getClickedImageSrc);
        galleryImg.setAttribute('data-index', currentImgIndex);
        let gallery = document.getElementById(this.gallery);
        gallery.style.display = 'flex';
    }

    closeGallery(e) {
        let clickedEl = e.target;
        let clickedElId = e.target.id;

        if (clickedElId === this.gallery || clickedElId === this.close) {
            document.getElementById(this.gallery).style.display = 'none';
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
        let currentOpenedImage = document.getElementById(this.modalImage);
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
        let modalImage = document.getElementById(this.modalImage);
        let newItemSrc = document.querySelector('[data-index = "' + newPositionToSet +'"]').getAttribute('src');
        modalImage.setAttribute('data-index', newPositionToSet);
        modalImage.setAttribute('src', newItemSrc);
    }
}