( function($) {
	let myJavasript = {
		init: function() {
			this.events()
		},

		events: function() {
			this.function1();
			this.function2();
			this.function3();
		},

		handleAccordionClick: function() {
            // If accordion class is clicked, do function.
			$(document).on('click', '.accordion', function() {
				$(this).show();
                // Insert code here.
			});
		},

		handleAccordionV2Click: function() {
            // If accordion-v2 is clicked, do function.
			$(document).on('click', '.accordion-v2', function() {
                // Insert code here.
			});
		},

		handlePricingTableKeyDown: function() {
            // IF keydown event happens within toggle-menu class, do function.
			$( document ).on( 'keydown', '.toggle-menu', function(e) {
                // Insert code here.
			} )

		},
    }

	$(document).ready(function() {
		myJavasript.init()
	})
} )(jQuery)