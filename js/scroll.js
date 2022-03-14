$(document).scroll(function () {
    $('section').each(function () {
        if($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {
            if($(this).attr('class') == 'project-section') {
              $('header').css('background-color', 'white');
              $('header a').css('color', 'black');
              $('header .current').css('text-decoration-color', '#407CF7');
            } else if($(this).attr('class') == 'featured-section') {
              $('header').css('background-color', '#407CF7');
              $('header a').css('color', 'white');
              $('header .current').css('text-decoration-color', 'white');
            }else {
              $('header').css('background-color', 'black');
              $('header a').css('color', 'white');
              $('header .current').css('text-decoration-color', '#407CF7');
            }
        }
    });
 });
 