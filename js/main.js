$(document).ready(function() {
    
    $('.tabs li a').click(function(event){
        event.preventDefault();
        $('.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();
        $($(this).attr('href')).show();
    });

    $(".home-link").click(function () {
        $('html,body').animate({
                scrollTop: $(".top-footer").offset().top
            },
            'slow');
    })
    $(".about-link").click(function () {
        $('html,body').animate({
                scrollTop: $(".about-our-company").offset().top
            },
            'slow');
    })
    $(".serices-types").click(function () {
        $('html,body').animate({
                scrollTop: $(".gallery-content").offset().top
            },
            'slow');
    })
    $(".contact-us ").click(function () {
        $('html,body').animate({
                scrollTop: $(".page-footer").offset().top
            },
            'slow');
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() > 250) {
            $('header').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 251) {
            $('header').removeClass('navbar-fixed');
        }
    }); 

    $('.islamicInput').calendarsPicker({
        calendar: $.calendars.instance('ummalqura'),
        monthsToShow: [1, 1],
        showOtherMonths: true,
        changeMonth: true,
        changeYear: true,
        yearRange: '1339:1439',
        // onSelect: function (date) {
        //     // alert('You picked ' + date[0].formatDate());
        // }
    });
});