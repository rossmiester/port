'use strict';

var app = (function(document, $) {
	var docElem = document.documentElement,
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
            // needed to use joyride
            // doc: http://foundation.zurb.com/docs/components/joyride.html
            $(document).on('click', '#start-jr', function () {
                $(document).foundation('joyride', 'start');
            });
			_userAgentInit();
		};
	return {
		init: _init
	};
})(document, jQuery);

(function() {
	app.init();
})();

////////////    JQUERY     ///////////////////////////////////

// toggle menu open/close
$(".right-small a").click(function() {
    $("#menu").toggle();
});

// hide menu onclick
$(".right-off-canvas-menu").click(function() {
    $("#menu").hide();
});


//creates a smooth scroll animation when the top bar nav anchor is clicked - scrolls down to link section on page
$(".right-off-canvas-menu li a").click(function() {
	// stores the href attribute that is clicked in variable called page
	var page_location = $(this).attr('href'); 
    $('html, body').animate({
        scrollTop: $(page_location).offset().top
    }, 2000);
});

//creates a smooth scroll animation when the top bar nav anchor is clicked - scrolls down to link section on page
//this function is same as function above but for mikeTheDev link at top of page
$(".title a").click(function() {
	// stores the href attribute that is clicked in variable called page
	var page_location = $(this).attr('href'); 
    $('html, body').animate({
        scrollTop: $(page_location).offset().top
    }, 2000);
});

//home navigation buttons - creates smooth scroll animation to selected pages
$("#home .row .columns:nth-child(2) a").click(function() {
	// stores the href attribute that is clicked in variable called page
	var page_location = $(this).attr('href'); 
    $('html, body').animate({
        scrollTop: $(page_location).offset().top
    }, 2000);
});

$(document).ready(function () {
    $(document).foundation();
    $(".inner-wrap, .right-off-canvas-menu, .main-section").height($(window).height() - $(".fixed").height());
});

////////////////////// ANGULAR //////////////////////////

// contact form functions
(function(angular) {
  var app = angular.module("contact", []);

  app.controller("contactForm", ['$scope', '$http', function($scope, $http) {
    $scope.success = false;
    $scope.error = false;

    $scope.sendMessage = function( input ) {
      $http({
          method: 'POST',
          url: '../php/processForm.php',
          data: input,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .success( function(data) {
        if ( data.success ) {
          $scope.success = true;
        } else {
          $scope.error = true;
        }
      } );
    }
  }]);
})(angular);

