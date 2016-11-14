$(document).ready(function() {

    var search = document.querySelector('.search');
    var submit = document.querySelector('.search-submit');
    var input = document.getElementById('search-input');

    var toggleSearch = function() {
        search.classList.toggle('open');
    }

    input.addEventListener('focus', toggleSearch);
    input.addEventListener('blur', toggleSearch);
    submit.addEventListener('focus', toggleSearch);
    submit.addEventListener('blur', toggleSearch);


    var navmenu = document.querySelector('#navmenu-items');
    var triggers = document.querySelectorAll('.navmenu-item'); //navmenu.children; 
    var menuIsOpen = false;
    var menuToOpen;
    var mobileicon = document.querySelector('.fa-angle-down');
    var mobilemenu = document.querySelectorAll('.navgroups-body');

    clickoutside = function(e) {
        e.stopPropagation();
    }

    openNavMenu = function(menu) {
        menuIsOpen = menu;
        menuToOpen = undefined;

        menu.classList.add('is-open');

        navmenu.addEventListener('click', clickoutside, false);
        document.documentElement.addEventListener('click', closeNavMenu, false);

        // console.log('openNavMenu');
    }
    closeNavMenu = function() {
        menu = menuIsOpen;
        menuIsOpen = false;

        menu.classList.remove('is-open');

        navmenu.removeEventListener('click', clickoutside, false);
        document.documentElement.removeEventListener('click', closeNavMenu, false);

        // console.log('closeNavMenu');
    }
    if (window.matchMedia("(min-width: 600px)").matches) {
        Array.prototype.forEach.call(triggers, function(trigger, index) {
            trigger.addEventListener('mouseenter', function() {
                menuToOpen = setTimeout(function() {
                    openNavMenu(trigger)
                }, 100);
            }, false);
            trigger.addEventListener('mouseleave', function() {
                if (menuToOpen)
                    clearTimeout(menuToOpen);
                else {
                    closeNavMenu();
                }
            }, false);

            trigger.addEventListener('click', function(e) {
                target = e.target;


                if (trigger.id !== 'navitem-research' && target !== mobileicon) {
                    // Naugthy exception from lazy developers. Tsst tsst!
                    if ((target.matches('.navitem-header a')) && !menuIsOpen) {
                        openNavMenu(trigger);
                        e.preventDefault();
                    }
                }
            }, false);
        });
    }

    var mobiletrigger = document.querySelector('#navitem-toggle');
    var indexcounter = undefined;


    Array.prototype.forEach.call(triggers, function(trigger, index) {
        trigger.addEventListener('click', function(e) {
            trigger = e.target;
            triggerparent = trigger.parentNode.parentNode;


            if (e.target.matches('#navitem-toggle')) {
                if (!menuIsOpen) {
                    openNavMenu(triggerparent);
                    // e.preventDefault();
                    indexcounter = index;
                } else if (menuIsOpen) {
                    closeNavMenu(triggerparent);
                    if (index !== indexcounter) {
                        openNavMenu(triggerparent);
                        indexcounter = index;
                        // e.preventDefault();
                    }

                }
            }




        }, false);
    });


    var navbrandtitle = document.querySelector('.navbrand-title');
    var navcontainer = document.querySelector(".nav-container");
    var navbrand = document.querySelector(".navbrand .navbrand-logo");
    var searchandlogin = document.querySelector('.search-and-login');
    var body = document.querySelector("body");
    var backdrop = document.querySelector('#backdrop');
    var navmenuopen = document.querySelector("#navmenu-open");
    var navmenuclose = document.querySelector("#navmenu-close");
    var navmenubody = document.querySelector(".navmenu-body");
    var asidetrigger = document.querySelector('.asidetrigger');
    var aside = document.querySelector("aside");
    var section = document.querySelector(".section");
    var asideclass = document.querySelector(".aside")
    var asidebutton = document.querySelector("#aside-button");
    var homepage_navtrigger = document.querySelector('.page-homepage .navmenu-trigger');
    var homepage_navbrand = document.querySelector('.page-homepage .navbrand');

    //opening and closing of mobile menu

    navmenuopen.addEventListener('click', function() {
        navmenubody.classList.add('open');
        navmenuopen.classList.add('hidden');
        navmenuclose.classList.remove('hidden');
        searchandlogin.classList.add('open');
        navbrand.classList.add('hidden');
        navbrandtitle.classList.add('open');
        homepage_navtrigger.classList.add('relative');
        homepage_navbrand.classList.add('relative');
        body.classList.add('no-ovf');
    });



    navmenuclose.addEventListener('click', function() {
        navmenubody.classList.remove('open');
        navmenuclose.classList.add('hidden');
        navmenuopen.classList.remove('hidden');
        searchandlogin.classList.remove('open');
        navbrand.classList.remove('hidden');
        navbrandtitle.classList.remove('open');
        homepage_navtrigger.classList.remove('relative');
        homepage_navbrand.classList.remove('relative');
        body.classList.remove('no-ovf');
    });


    //call for sidebar plugin
    sidebarplugin(asidetrigger, aside, asidebutton);

    // hide sidebar trigger if there is no sidebar
    if (!aside && asidetrigger) {
        asidetrigger.style.display = 'none';
    }



    // Create search params
    function getURLParameter(name) {
        return decodeURI(
            (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, ''])[1]
        );
    }
    var q = getURLParameter("q");
    q = q.replace("+", " ");
    if (q != '') { $("#catalogue-app").attr("data-query", q); }

});
