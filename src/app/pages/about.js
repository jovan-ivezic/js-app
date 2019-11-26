import BasePage from "./base-page";
import Gallery from '../modules/about/runner'

export default class AboutPage extends BasePage {

    constructor() {
        super();
    }

    run() {
        new About();
    }
}