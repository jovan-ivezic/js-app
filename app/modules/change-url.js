(function() {

    var links = document.querySelectorAll('.js-nav-link');

    var historyState = {};

    for (var i = 0; i < links.length; i++) {

        links[i].addEventListener('click', function(evt) {
            evt.preventDefault();

            //Remove hash from URL and replace with desired URL
            if (history && history.pushState) {
                //Only do this if history.pushState is supported by the browser
                history.pushState(historyState, evt.target.innerHTML, evt.target.href);
            }
        });
    }

})();
