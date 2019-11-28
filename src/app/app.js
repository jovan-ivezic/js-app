// require('./modules/examples/iify.js');

import Navigation from './modules/navigation/runner.js';
import Gallery from './modules/gallery/runner.js';
import IIFYExample from './modules/examples/iify.js';
import About from './modules/about/runner.js';

new About();
// new IIFYExample();
//Init modules
new Navigation();
new Gallery();
// new IIFYExample().run();
// new localStorage();


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