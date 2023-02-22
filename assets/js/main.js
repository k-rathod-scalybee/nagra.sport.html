AOS.init({
  duration: 1500,
  disable: 'mobile'
});

// SVG file to SVG code convert JS Start
function img2svg() {
  jQuery(".in-svg").each(function (i, e) {
    var $img = jQuery(e);
    var imgID = $img.attr("id");
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    jQuery.get(
      imgURL,
      function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find("svg");
        // Add replaced image's ID to the new SVG
        if (typeof imgID !== "undefined") {
          $svg = $svg.attr("id", imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== "undefined") {
          $svg = $svg.attr("class", " " + imgClass + " replaced-svg");
        }
        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr("xmlns:a");
        // Replace image with new SVG
        $img.replaceWith($svg);
      },
      "xml"
    );
  });
}
img2svg();
// SVG file to SVG code convert JS End

// Heder Fixed JS Start
$(window).scroll(function () {
  if ($(this).scrollTop() > 60) {
    $(".header").addClass("fixed");
  } else {
    $(".header").removeClass("fixed");
  }
});
// Heder Fixed JS End

// Header Mobile Menu JS
$(document).ready(function() {
  $('.toggle__menu').click(function() {
    $(".header__menu").slideToggle();
    $(".toggle__menu").toggleClass('open');
  });
});
// Header Mobile Menu JS

// Modal Popup JS
$(".open-modal").click(function(){
  $("body").toggleClass("popup-open");
});
$(".close__modal").click(function(){
  $("body").removeClass("popup-open");
});
// Modal Popup JS

// Scroll Effect JS
$(document).ready(function () {
  $(window).bind('scroll', function (e) {
    parallaxScroll();
  });
});

function parallaxScroll() {
  const scrolled = $(window).scrollTop();
  if (window.matchMedia('(max-width: 991px)').matches) {
    $('.baseball-player').css('bottom', (0 - (scrolled * .06)) + 'px');
  }
  else if (window.matchMedia('(max-width: 575px)').matches) {
    $('.baseball-player').css('bottom', (0 - (scrolled * .01)) + 'px');
  } 
  else {
    $('.golfer-man').css('top', (50 - (scrolled * .06)) + 'px');
    $('.baseball-player').css('bottom', (0 - (scrolled * .13)) + 'px');
  }
}
// Scroll Effect JS

// Number Counter
jQuery('.counter').each(function () {
  jQuery(this).prop('Counter',0).animate({
      Counter: jQuery(this).text()
  }, {
    duration: 6000,
    easing: 'swing',
    step: function (now) {
        now = Number(Math.ceil(now)).toLocaleString('en');
        jQuery(this).text(now);
    }
  });
});
// Number Counter