



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

    });

    $(".nav-top-link1").mouseout(function () {
        $(".box-contact2").hover().css("border-color", "#55d0b5");

    });

    $(".nav-top-link2").mouseenter(function () {
        $(".box-contact3").hover().css("border-color", "gold");

    });

    $(".nav-top-link2").mouseout(function () {
        $(".box-contact3").hover().css("border-color", "#55d0b5");

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
  