
/*********LOAD PAGE*********





// Scrolling Effect

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $('nav').addClass('navbar-color');
  }

  else {
    $('nav').removeClass('navbar-color');
  }
})



/*************HUMBERQ MENU*********** */


$(document).ready(function () {

  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });

});



/*************NAV TOP CONTACT*********** */

$(document).ready(function () {
    $(".nav-top-link1").mouseenter(function () {
    $(".box-contact2").hover().css("border-color", "gold");
    $(".fa-phone-alt").addClass("phone-icon").fadeIn(2000);

  });

  $(".nav-top-link1").mouseout(function () {
    $(".box-contact2").hover().css("border-color", "white");
    $(".fa-phone-alt").removeClass("phone-icon");

  });

  $(".nav-top-link2").mouseenter(function () {
    $(".box-contact3").hover().css("border-color", "gold");
    $(".fa-envelope").addClass("phone-icon");

  });

  $(".nav-top-link2").mouseout(function () {
    $(".box-contact3").hover().css("border-color", "white");
    $(".fa-envelope").removeClass("phone-icon");

  });

});

/*****************SCROLL TOP***************** */
$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $('#topBtn').fadeIn();
    } else {
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function () {
    $('html ,body').animate({ scrollTop: 0 }, 600);
  });
});



/******TAB MENU*******/

$(document).ready(function () {
  $(".link-tab-menu").click(function () {
    $(".section19").css("padding-bottom", "500px");
  });
});


/*
$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------
	$(".loader").fadeOut(1000); 
  $("#preloder").delay(1000).fadeOut("slow");

  
   
});
*/

///////PLAYLINK////////


