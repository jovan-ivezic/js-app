import '../scss/style.scss'


//Education - code examples
require('./modules/examples/learning.js');
import Data from './modules/examples/data/data.js';
import IIFExample from './modules/examples/iife.js';
import localStorage from './modules/examples/local-storage.js';
import Spread from './modules/examples/spread.js';
import ArrowFunction from './modules/examples/arrow-functions.js';
import Filter from './modules/examples/filter.js';
import Callback1 from './modules/examples/callback-1.js';
import Callback2 from './modules/examples/callback-2.js';
import Callback3 from './modules/examples/callback-3.js';
import Promise from './modules/examples/promise-example.js';
import DestructuringExample from './modules/examples/destructuring.js';
import PromiseExample from './modules/examples/promise-example.js';
import AsyncAwait1 from './modules/examples/async-await-1.js';
import PrototypeExample from './modules/examples/prototype-example.js';
import ProtoExample from './modules/examples/proto-example.js';

//Instances
// new IIFEExample();
// new ArrowFunction().init();
// new localStorage();
// new Spread();
// var filter = new Filter(Data.getUsers());
// console.log(filter);
// var developers = new Filter(Data.getUsers()).run();
// new Callback1().run();
// new Callback2().run();
// new Callback3().run();
// new PromiseExample().run();
// new DestructuringExample().run();
// new AsyncAwait1().run();
// new PrototypeExample().run();
// new ProtoExample().run();

//Modules related with task
import Navigation from './modules/navigation/runner.js';
import Gallery from './modules/gallery/runner.js';
import About from './modules/about/runner.js';
import Contact from './modules/contact/form.js'

new Navigation();
// new About().run();
new Gallery();
// new Contact();

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