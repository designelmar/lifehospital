
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




/*************HUMBERQ MENU*********** */


$(document).ready(function () {

    $('.second-button').on('click', function () {

        $('.animated-icon2').toggleClass('open');
    });

});





/*****************SCROLL TOP***************** */
$(document).ready(function(){

    $(window).scroll(function(){
      if($(this).scrollTop() > 40){
        $('#topBtn').fadeIn();
      } else{
        $('#topBtn').fadeOut();
      }
    });
  
    $("#topBtn").click(function(){
      $('html ,body').animate({scrollTop : 0},800);
    });
  });
  