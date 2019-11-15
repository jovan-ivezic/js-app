import BasePage from "./base-page";
import Gallery from '../modules/gallery/runner'

export default class GalleryPage extends BasePage {

    constructor() {
        super();
    }

    run() {
        new Gallery();
    }
}