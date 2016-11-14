require.config({
    "baseUrl": "cat-client/",
    "paths": {
        "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
      // 'contrib' : 'contrib'
    }
});


// Load the main app module to start the app
// require(["app/main"]);
require(['++theme++bise.diazotheme/js/navbar', '++theme++bise.diazotheme/js/contrib/minigrid.min', '++theme++bise.diazotheme/js/contrib/scrollTo', '++theme++bise.diazotheme/js/contrib/dropdown', 'cat-client/catalogue.js'], function() {
    //the semantic ui code is loaded up also.
});





// http://bise-portal.edw.ro/portal_skins/bise_theme_js/cat-client/catalogue.js
