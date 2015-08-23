var is_small=function(){
  return $('.panel-cover').width()<960;
}

$(document).ready(function() {

  $('body').removeClass('no-js');

  $('a.blog-button').click(function() {
    // If already in blog, return early without animate overlay panel again.
    if (location.hash && location.hash == "#blog") return;
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    $('.main-post-list').removeClass('hidden');
    currentWidth = $('.panel-cover').width();
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
      $('.content-wrapper').addClass('animated slideInRight');
      $('.border_item').addClass('hidden');
    } else {
      $('.panel-cover').css('max-width',currentWidth);
      $('.panel-cover').animate({'max-width': '700px', 'width': '30%'}, 400, swing = 'swing', function() {} );
    }
  });

  if (window.location.pathname != '/' || location.hash == "#blog") {
    $('.border_item').addClass('hidden');
  } else {
    $('.border_item').removeClass('hidden');
  }

  if (window.location.hash && window.location.hash == "#blog") {
    $('.panel-cover').addClass('panel-cover--collapsed');
    $('.main-post-list').removeClass('hidden');
  }

  if (window.location.pathname.substring(0, 5) == "/tag/") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  $('.btn-mobile-menu__icon').click(function() {
    if ($('.navigation-wrapper').css('display') == "block") {
      $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');
    } else {
      $('.navigation-wrapper').addClass('visible animated bounceInDown');
    }
    $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
  });

  $('.navigation-wrapper .blog-button').click(function() {
    if (is_small()) {
      $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');
      $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
    };
  });

});
$(document.links).filter(function() {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');