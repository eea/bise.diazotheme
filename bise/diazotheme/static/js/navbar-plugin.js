   $(document).ready(function() {



 var sidebarplugin = function($trigger, $sidebar, $closetrigger) {
 			$body = $("body");
        	$backdrop = $('#backdrop');
               $trigger.click(function() {
                   $sidebar.addClass("triggered")
                   $body.addClass('sidebaropen');
               });

               $backdrop.click(function() {
                   $sidebar.removeClass("triggered")
                   $body.removeClass('sidebaropen');
               });

               $closetrigger.click(function() {
                   $sidebar.removeClass("triggered")
                   $body.removeClass('sidebaropen');
               });
           }

       });