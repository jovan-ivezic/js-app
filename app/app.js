// require('./modules/gallery');
// require('./modules/about');
// require('./modules/form');
// require('./modules/learning');
// require('./modules/navigation');

// import IIFYExample from './modules/examples/iify.js';
// import localStorage from './modules/examples/local-storage.js';
// import Navigation from './modules/navigationWithClasses.js'


//Init modules
// new Navigation();
// new IIFYExample().run();
// new localStorage();


import Router from 'g4.es6.router'
import basePage from './pages/base-page';
import GalleryPage from './pages/gallery';
import AboutPage from './pages/about';

const router = new Router();

router.add({
    path: '/home',
    runner: GalleryPage
}).add({
    path: '/about',
    runner: AboutPage
}).run();

// import SearchPage from "./pages/search";
// import MessagesPage from "./pages/messages";
// import ProfilePage from "./pages/profile";
// import AccountPage from "./pages/account";
// import AccountSettingsPage from "./pages/account-settings";
// import EmailSettingsPage from "./pages/email-settings";
// import GalleryPage from "./pages/gallery";
// import BasePage from "./pages/base-page";
// import PasswordReset from './modules/password-reset/runner';
// import PersonalDetailsPage from './pages/personal-details';
