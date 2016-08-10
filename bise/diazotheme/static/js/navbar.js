$(document).ready(function() {
   

$(window).resize(function(){
    if ($(window).width() <= 800){  
       
        document.getElementById('navsearch-input').addEventListener('focus', function() {
        this.parentElement.parentElement.classList.add('navsearch-open');
         console.log("yep");
    }, false);
    }   
}).resize();
   

    $('.navsearch-addon').on('click', function() {
        $('.search-form  ').addClass('navsearch-open');
         $('#navsearch-submit').removeClass("no-events");
        $('#navsearch-input').focus();
    });

    $('html').click(function() {
        if (!($(event.target).hasClass('navsearch-addon'))) {
            // console.log(event.target);
            $('#navsearch-submit').addClass("no-events");

        if ($(window).width() >= 800){  
            $('.search-form').removeClass('navsearch-open');
            }   
        }

    });

    document.getElementById('navsearch-input').addEventListener('blur', function() {
            this.parentElement.parentElement.classList.remove('navsearch-open');
    }, false);

    console.log('merge');

    $triggers = $('[data-toggle="navmenu"]');

    $triggers.each(function() {
        var $trigger = $(this),
            $target = $(this).closest('.navmenu-item')
            .find('.navgroups-body')
            .first();
        $trigger.click(function() {
            $target.toggleClass('open');

            // $target.delay( 100 ).scrollTo(150, 200);

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

        // $links = $(".col-md-3.col-md-pull-9.col-lg-2.col-lg-pull-10")
        $navbrandtitle = $('.navbrand-title');
        $navcontainer = $(".nav-container");
        $navbrand = $(".navbrand .navbrand-logo");
        $body = $("body");
        $searchandlogin = $('.search-and-login');
        $backdrop = $('#backdrop');
        $navmenuopen = $("#navmenu-open");
        $navmenuclose = $("#navmenu-close");
        $navmenubody = $(".navmenu-body");
        $asidetrigger = $(".asidetrigger");
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
        });

        $asidetrigger.click(function() {
            $aside.addClass("triggered")
            $body.addClass('sidebaropen');
        });

        $backdrop.click(function() {
            $aside.removeClass("triggered")
            $body.removeClass('sidebaropen');
        });

        $asidebutton.click(function() {
            $aside.removeClass("triggered")
            $body.removeClass('sidebaropen');
        });

        $navmenuclose.click(function() {
            $navmenuclose.addClass('hidden');
            $navmenuopen.removeClass('hidden');
            $searchandlogin.removeClass('open');
            $navbrand.removeClass('hidden');
            $navbrandtitle.removeClass('open');
            $('.navmenu-trigger').removeClass('relative');
            $('.navbrand').removeClass('relative');
        });

        $navmenuitem.each(function() {

            var $navmenuitem = $(this),
                $target1 = $(this).closest($navmenuitem)
                .find($noeventstablet)
                .first();
            $navmenuitem.click(function() {
                $target1.removeClass('noevents');
                console.log("lololo");
            });

            $navmenuitem.click(function(evt) {
                if ($(evt.target).is($target1)) {
                    $target1.addClass('noevents');
                }
            });

        });

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