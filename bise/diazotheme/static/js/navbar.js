(function() {
  var dom = window.bise.dom,
      scrollHeight,
      $elems = $(dom.navItems);

  function getScrollHeight() {
    var max = 0;
    $elems.each(function() {
      height = this.scrollHeight;  
      if (height > max)
        max = height;
    })
    return max;
  }

  function navbar() {
    if ( $(window.innerWidth) < 960) {
      $elems.removeAttr('style');
    } else {
      if (!scrollHeight)
        scrollHeight = getScrollHeight();
      scrollTop = (document.body.scrollTop || document.documentElement.scrollTop);
      height = Math.abs(scrollTop <= scrollHeight ? scrollTop : scrollHeight);
      $elems.css({
        'height': scrollHeight - height,
        'opacity': scrollHeight - height / scrollHeight
      });
      // $(document.body).css({
      //   'padding-top': height + $(dom.siteHeader).height()
      // });
    }
  }
  function resize() {
    scrollHeight = getScrollHeight();
    navbar();
  }
  $(window).resize(function() {
    window.clearTimeout(resize);
    window.setTimeout(resize, 50);
  });
  $(document).scroll(function() {
    window.clearTimeout(navbar);
    window.setTimeout(navbar, 50);
  });
  // document.body.scrollTop = document.getElementById('site-body').offsetTop;
  // document.documentElement.scrollTop = document.getElementById('site-body').offsetTop;
  navbar();

  // var Navdrop = Drop.createContext({
  //   classPrefix: 'navdrop'
  // });

  // $('.navmenu .navmenu-title').each(function() {
  //   var self = this;
  //   drop = new Drop({
  //     target: self,
  //     content: $(self).siblings('.navmenu-submenu')[0],
  //     position: 'bottom',
  //     openOn: 'hover',
  //     constrainToWindow: true,
  //     constrainToScrollParent: true,
  //     tetherOptions: {

  //     }
  //   });
  // });

  // $('.navmenu .navmenu-title').each(function() {
  //   var $this = $(this);
  //   new Tether({
  //     element: $this[0],
  //     target: $this.siblings('.navmenu-submenu')[0],
  //     attachment: 'bottom center',
  //     targetAttachment: 'top center',
  //     constraints: [
  //       {
  //         to: 'window',
  //         pin: true
  //       }
  //     ]
  //   });
  // });
  

  bise.fn['navbar'] = navbar;
  bise.fn['getScrollHeight'] = getScrollHeight;
}());
