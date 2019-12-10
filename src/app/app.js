// require('./modules/examples/iify.js');

//Education - code examples
import IIFYExample from './modules/examples/iify.js';
import localStorage from './modules/examples/local-storage.js';
import Spread from './modules/examples/spread.js';
import ArrowFunction from './modules/examples/arrow-functions.js';
// new IIFYExample();
// new localStorage();
// new Spread();
new ArrowFunction();


//Modules related with task
import Navigation from './modules/navigation/runner.js';
import Gallery from './modules/gallery/runner.js';
import About from './modules/about/runner.js';

new About();
new Navigation();
new Gallery();


// import Router from 'g4.es6.router'
// import basePage from './pages/base-page';
// import GalleryPage from './pages/gallery';
// import AboutPage from './pages/about';
// import Gallery from './modules/gallery/runner';

// const router = new Router();

// router.add({
//     path: '/home',
//     runner: GalleryPage
// }).run();
// .add({
//     path: 'about',
//     runner: AboutPage
// }).run();