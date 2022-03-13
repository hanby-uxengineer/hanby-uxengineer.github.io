$(document).scroll(function () {
    $('section').each(function () {
        if($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {
            if($(this).attr('class') == 'intro-section') {
              $('header').css('background-color', 'black');
              $('header a').css('color', 'white');
            } else {
              $('header').css('background-color', 'white');
              $('header a').css('color', 'black');
            }
        }
    });
 });
 