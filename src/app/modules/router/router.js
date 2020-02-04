export default class Router {
    
    constructor() {
       
    }

    init() {
        window.addEventListener("hashchange", this.onPageChanged.bind(this));
        let routes = [];
        let params = {};
    }

    add(route, module) {
        this.routes[route] = module;
        return this;
    }

}
    // var Router = function () {
    //     // Evento.on("PAGE_CHANGED", this.onPageChanged, this);
    //     window.addEventListener("hashchange", this.onPageChanged.bind(this));

    // };

    // Router.prototype = {

    //     routes: [],

    //     params: {},

    //     add: function (route, module) {
    //         this.routes[route] = module;
    //         return this;
    //     },

    //     destroy: function () {
    //         for (var key in this.routes) {
    //             try {
    //                 new this.routes[key]().destroy();
    //             }
    //             catch (e) {
    //                 console.log(e);
    //             }
    //         }
    //     },

    //     getRouteData: function (route, url) {
    //         var request = {
    //             isRouthMatch: false,
    //             params: {}
    //         };
    //         for (var i = 1; i < route.length; i++) {
    //             var isVarialePart = route[i].indexOf(":") >= 0;

    //             if (!isVarialePart && route[i] != url[i]) {
    //                 return request;
    //             }
    //             else {
    //                 request.params[route[i].replace(":", "")] = url[i];
    //             }
    //         }
    //         request.isRouthMatch = true;
    //         return request;
    //     },

    //     onPageChanged: function () {
    //         this.destroy();
    //         this.run();
    //     },

    //     run: function () {
    //         var url = location.pathname.replace(/\/$/, "").split("/");
    //         for (var routeName in this.routes) {
    //             var route = routeName.split("/");
    //             if (this.mathUrlRoutLeng(route, url)) {
    //                 var request = this.getRouteData(route, url);
    //                 if (request.isRouthMatch) {
    //                     new this.routes[routeName]().run();
    //                 }
    //             }
    //         }
    //     },

    //     mathUrlRoutLeng: function (route, url) {
    //         return url.length == route.length;
    //     }
    // };

    // return Router;