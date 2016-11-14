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
    var indexcounter= undefined;


    Array.prototype.forEach.call(triggers, function(trigger, index) {
        trigger.addEventListener('click', function(e) {
        trigger = e.target;
        triggerparent  = trigger.parentNode.parentNode;


            if (e.target.matches('#navitem-toggle')) {
            if (!menuIsOpen) {
                openNavMenu(triggerparent);
                // e.preventDefault();
                indexcounter = index;
            }
           else if (menuIsOpen) {
                closeNavMenu(triggerparent);
                if(index !== indexcounter){
                openNavMenu(triggerparent);
                indexcounter = index;
                // e.preventDefault();
                }
  
            }
        }


       

        }, false);
    });



    $triggers = $('[data-toggle="navmenu"]');

    $triggers = $("[data-target='#navmenu-body']");
    $triggers.each(function() {
        var $trigger = $(this),
            target = $trigger.data('target'),
            $target = $(target);
        $trigger.click(function() {
            $target.toggleClass('open');

        });

        $navbrandtitle = $('.navbrand-title');
        $navcontainer = $(".nav-container");
        $navbrand = $(".navbrand .navbrand-logo");
        $searchandlogin = $('.search-and-login');
        $body = $("body");
        $backdrop = $('#backdrop');
        $navmenuopen = $("#navmenu-open");
        $navmenuclose = $("#navmenu-close");
        $navmenubody = $(".navmenu-body");
        $asidetrigger = $(".folder .asidetrigger");
        $aside = $("aside");
        $section = $(".section");
        $asideclass = $(".aside")
        $asidebutton = $("#aside-button");
        $noeventstablet = $(".navmenu-item .navitem-header a.noevents");
        $navmenuitem = $(".navmenu-item");
        $nav = $("nav");

        $navmenuopen.click(function() {
            $navmenuopen.addClass('hidden');
            $navmenuclose.removeClass('hidden');
            $searchandlogin.addClass('open');
            $navbrand.addClass('hidden');
            $navbrandtitle.addClass('open');
            $('.page-homepage .navmenu-trigger').addClass('relative');
            $('.page-homepage .navbrand').addClass('relative');
            $body.addClass('no-ovf');
        });

        $cataloguesidebar = $('.catalogue-container .catalogue-sidebar');


        var asidetrigger = document.querySelector('.asidetrigger');
        var aside = document.querySelector('aside');
        var asidebutton = document.querySelector('#aside-button');


        sidebarplugin(asidetrigger, aside, asidebutton);

        if (!$("aside").length) {
            $asidetrigger.hide();
        }


        $navmenuclose.click(function() {
            $navmenuclose.addClass('hidden');
            $navmenuopen.removeClass('hidden');
            $searchandlogin.removeClass('open');
            $navbrand.removeClass('hidden');
            $navbrandtitle.removeClass('open');
            $('.navmenu-trigger').removeClass('relative');
            $('.navbrand').removeClass('relative');
            $body.removeClass('no-ovf');
        });



    });









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
