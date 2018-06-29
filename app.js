//============================RESPONSIVE NAV MENU==============================
$('document').ready(function() {
    $('#nav-toggle').on('click', function(event) {
      event.stopPropagation();
      this.classList.toggle('active');
      $('.navigation__menu').slideToggle();
    });
  
    $('html').click(function() {
      if($('#nav-toggle').hasClass('active')) {
        $('#nav-toggle').removeClass('active');
        $('.navigation__menu').slideToggle();
      }
    });
  });

//==============================NAV SCROLLING==================================
// HOME
$("#section-header").click(function() {  
    $('html, body').animate({
      scrollTop: $("#header").offset().top-60
    }, 1000);
    target.focus(); // Setting focus
    if (target.is(":focus")){ // Checking if the target was focused
      return false;
    } else {
      target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
      target.focus(); // Setting focus
    };
    return false;
});

// STORE
$("#section-store").click(function() {  
    $('html, body').animate({
      scrollTop: $("#store").offset().top-60
    }, 1000);
    target.focus(); // Setting focus
    if (target.is(":focus")){ // Checking if the target was focused
      return false;
    } else {
      target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
      target.focus(); // Setting focus
    };
    return false;
});

// CUSTOM
$("#section-custom").click(function() {  
    $('html, body').animate({
      scrollTop: $("#custom").offset().top-60
    }, 1000);
    target.focus(); // Setting focus
    if (target.is(":focus")){ // Checking if the target was focused
      return false;
    } else {
      target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
      target.focus(); // Setting focus
    };
    return false;
});

// DEMOS
$("#section-demos").click(function() {  
    $('html, body').animate({
        scrollTop: $("#demos").offset().top-60
    }, 1000);
    target.focus(); // Setting focus
    if (target.is(":focus")){ // Checking if the target was focused
        return false;
    } else {
        target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
        target.focus(); // Setting focus
    };
    return false;
});

// VIP
$("#section-vip").click(function() {  
    $('html, body').animate({
        scrollTop: $("#vip").offset().top-60
    }, 1000);
    target.focus(); // Setting focus
    if (target.is(":focus")){ // Checking if the target was focused
        return false;
    } else {
        target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
        target.focus(); // Setting focus
    };
    return false;
});