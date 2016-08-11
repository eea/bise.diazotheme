


function sidebarplugin($trigger, $sidebar, $closetrigger) {

	console.log('plugin works');
 			$body = $("body");
        	$backdrop = $('#backdrop');
               $trigger.click(function() {
               		console.log($sidebar);
                   $sidebar.addClass('triggered')
                   $body.addClass('sidebaropen');
               });

               $backdrop.click(function() {
                   $sidebar.removeClass('triggered')
                   $body.removeClass('sidebaropen');
               });

               $closetrigger.click(function() {
                   $sidebar.removeClass('triggered')
                   $body.removeClass('sidebaropen');
               });
           }