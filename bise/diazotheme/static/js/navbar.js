






$( document ).ready(function(){

  // data-toggle="dropdown"

  // data-target
  
  // data-toggle='navmenu';
  


  // alert('merge');
document.getElementById('navsearch-input').addEventListener('focus', function() {
  console.log(this.parentElement);
  this.parentElement.parentElement.classList.add('navsearch-open');
}, false);

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





 $triggers=$("[data-target='#navmenu-body']");
  $triggers.each(function() {
    var $trigger = $(this),
        target = $trigger.data('target'),
        $target = $(target);
$trigger.click(function() {
      $target.toggleClass('open');

    });



// $links = $(".col-md-3.col-md-pull-9.col-lg-2.col-lg-pull-10")
 $body = $("body");

 $backdrop = $('#backdrop');
$navmenuopen=$("#navmenu-open");
$navmenuclose=$("#navmenu-close");
$navmenubody=$(".navmenu-body");
$asidetrigger=$(".asidetrigger");
$aside=$("aside");
$section=$(".section");
$asideclass=$(".aside")

$navmenuopen.click(function(){
  // alert('merge');
$navmenuopen.addClass('hidden');
$navmenuclose.removeClass('hidden');
// $navmenubody.addClass('tablet');
});



$asidetrigger.click(function(){
$aside.addClass("triggered")
$body.addClass('sidebaropen');
});

$backdrop.click(function(){
$aside.removeClass("triggered")
$body.removeClass('sidebaropen');
});


$navmenuclose.click(function(){
  // alert('merge2');
$navmenuclose.addClass('hidden');
$navmenuopen.removeClass('hidden');
// $navmenubody.removeClass('tablet');
});





        $backdrop.on('click', function () {
            console.log('closing sidebar');
            // $filters.removeClass('open');
           // $navmenubody.removeClass('tablet');
           $body.removeClass('sidebaropen');
           $navmenuclose.addClass('hidden');
$navmenuopen.removeClass('hidden');
// $links.removeClass('quicklinks');
        });
  
  });






function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,''])[1]
    );
}
var q = getURLParameter("q");
q = q.replace("+", " ");
if (q != ''){$("#catalogue-app").attr("data-query", q);}



  }(jQuery));





