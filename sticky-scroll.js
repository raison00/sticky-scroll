//-- fc sept 2016 --//

//-----    smooth scroll  -------//
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        var target = $(this.hash);
        if (location.hostname == this.hostname) {
            if (target.length != 0) {
                $('html,body').animate({
                    scrollTop: target.offset().top -20
                }, 1000);
                return false;
            }
        }
    });
});



// ---------------------- sticky nav -------------------//
$(window).load(function () {

    var stickyNavTop = $('#sticky_nav').offset().top;

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > stickyNavTop) {
            $('#sticky_nav').addClass('sticky');
            console.log('applied class');

        } else {
            $('#sticky_nav').removeClass('sticky');


        }
    });
});

/* hiding sticky nav at bottom of page */
$(window).scroll(function() {
    var pageTop = $(window).scrollTop();
    if (pageTop > 7000) {
        $('#fc_nav').stop(true, true).fadeOut(200);
    } else {
        $('#fc_nav').fadeIn(200);
    }
});


//----- back to top hide and show feature implementation ------//

$(window).load(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('#toTop:hidden').stop(true, true).fadeIn();
            $("#toTop").css('position', 'fixed');
            $("#toTop").css('bottom', '10px');
        } else {
            $('#toTop').stop(true, true).fadeOut();
        }
    });
    $(window).scroll(function () {
        if ($("#toTop").offset().top > 7300) {
            $("#toTop").css('position', 'absolute');
            $("#toTop").css('bottom', '70px');


        } else {
            $("#toTop").css('position', 'fixed');
           $("#toTop").css('bottom', '10px');
        }
    });
});


//---------------------- back to top clicked --------------------------//
$(function () {
    $('#toTop').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#header-fc").offset().top
        }, 500);
    });
});


//---------------------- adding active status to sticky nav -------------------//

$(window).scroll(function () {
    var stickyNavTop = $('#fc_nav').offset().top;
    var window_height = $(window).height();
    var nav = $('#fc_nav');
    var nav_height = nav.outerHeight();
    var doc_height = $(document).height();
    var scrollPos = $(window).scrollTop();
    if ($(window).scrollTop() == 0) {
        nav.find('a:first').addClass('active');
    }

    $('.dcSectionContainer').each(function(){
        var top = $(this).offset().top - (nav_height / 2),
            bottom = top + $(this).outerHeight();
        if (scrollPos >= top && scrollPos <= bottom) {
            nav.find('a').removeClass('active')
            nav.find('a[href="#'+ $(this).attr('id') + '"]').addClass('active');
        }
        else if (scrollPos + window_height == doc_height) {
            if (!$('.fc_nav_li a:last').hasClass('active')) {
                nav.find('a').removeClass('active')
                nav.find('a:last').addClass('active')
            }
        }
        else if (scrollPos < stickyNavTop) {
            nav.find('a:first').addClass('active')
        }
    });

});

