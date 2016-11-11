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





    $triggers = $('[data-toggle="navmenu"]');

    $triggers.each(function() {
        var $trigger = $(this),
            $target = $(this).closest('.navmenu-item')
            .find('.navgroups-body')
            .first();
        $trigger.click(function() {
            $('.navgroups-body').removeClass('open');
            $target.toggleClass('open');
        });

    });

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

        $cataloguesidebar=$('.catalogue-container .catalogue-sidebar');
       
        sidebarplugin($asidetrigger, $aside, $asidebutton);

        if ( !$( "aside" ).length ) { 
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


//noevents
        $navmenuitem.each(function() {

            var $navmenuitem = $(this),
                $target1 = $(this).closest($navmenuitem)
                .find($noeventstablet)
                .first();
            $navmenuitem.click(function() {
                $target1.removeClass('noevents');
            });

            $navmenuitem.click(function(evt) {
                if ($(evt.target).is($target1)) {
                    $target1.addClass('noevents');
                }
            });

        });
//end of noevents
        

    });

    function getURLParameter(name) {
        return decodeURI(
            (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, ''])[1]
        );
    }
    var q = getURLParameter("q");
    q = q.replace("+", " ");
    if (q != '') { $("#catalogue-app").attr("data-query", q); }






});
