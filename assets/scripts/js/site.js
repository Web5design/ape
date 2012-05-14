/**
 * @class Axonometric Projection Site.
 * @author Matthew Wagerfield
 * @see http://twitter.com/mwagerfield
 */
(function() {

    var repositoryURL = 'https://github.com/MatthewWagerfield/Axonometric-Projection/',
        zipPath = 'zipball/master/',
        
        about = document.getElementById('about'),
        confirm = document.getElementById('confirm'),
        links = document.getElementById('links').querySelectorAll('a'),
    
        callbacks = {

            onConfirmClick: function (event) {
                if (about.className.indexOf('hide') > -1) {
                    about.classList.remove('hide');
                } else {
                    about.classList.add('hide');
                }
                return false;
            },

            onLinkClick: function (event) {
                switch (this.parentNode.className) {
                    case 'download':
                        window.location = repositoryURL + zipPath;
                        break;
                    case 'github':
                        window.location = repositoryURL;
                        break;
                }
                return false;
            }
        };

        

    function initialise() {
        
        // Add a click handler to the confirm button in the 'about' overlay.
        confirm.addEventListener('click', callbacks.onConfirmClick);

        // Add click handler to the links anchors.
        for (var i = 0, l = links.length; i < l; i++) {
            links[i].addEventListener('click', callbacks.onLinkClick);
        }
        
        // Add the animate class after the page has loaded.
        about.classList.add('animate');

        // Add Twitter sharing script.
        addShareScript('twitter-js', '//platform.twitter.com/widgets.js');

        // Add Facebook sharing script.
        addShareScript('facebook-js', '//connect.facebook.net/en_GB/all.js#xfbml=1');

        // Add Google Plus sharing script.
        addShareScript('googleplus-js', '//apis.google.com/js/plusone.js');
    }

    function addShareScript(id, api) {
        var script, base = document.getElementsByTagName('script')[0];
        if (!document.getElementById(id)) {
            script = document.createElement('script');
            script.id = id;
            script.src = api;
            base.parentNode.insertBefore(script, base);
        }
    }

    initialise();

}());