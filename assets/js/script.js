$(document).load(function() {
   $('.preloader').fadeOut('slow');
});

$( document ).ready(function() {

  $(".hamburger_icon").click(function(){
    $("nav").toggleClass('show_nav');
    $(".title").toggleClass('show_title');
  });

  $("#about_nav").click(function(){
    $('html,body').animate({
     scrollTop: $(".about_holder").offset().top - 100
   }),1000;
  });

  $("#services_nav").click(function(){
    $('html,body').animate({
     scrollTop: $(".services_holder").offset().top - 100
   },1000);
  });

  $("#portfolio_nav").click(function(){
    $('html,body').animate({
     scrollTop: $(".portfolio_holder").offset().top - 10
   },1000);
  });

  $("#contact_nav").click(function(){
    $('html,body').animate({
     scrollTop: $(".contact_holder").offset().top - 10
   },1000);
  });

  $(".about_button_landing").click(function(){
    $('html,body').animate({
     scrollTop: $(".portfolio_holder").offset().top - 10
   }),1000;
  });

  $(".portfolio_button_landing").click(function(){
    $('html,body').animate({
     scrollTop: $(".contact_holder").offset().top - 10
   },1000);
  });
});
