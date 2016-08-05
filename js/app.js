/* Smooth scrolling*/
$(document).on('click','a.smooth', function(e){
    e.preventDefault();
    var $link = $(this);
    var anchor = $link.attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top
    }, 1000);
});




jQuery(document).ready(function () {
    $('.nav').on('click mousedown mouseup touchstart touchmove', 'a.has_children', function () {
        if ( $(this).next('ul').hasClass('open_t') && !$(this).parents('ul').hasClass('open_t')) {
            $('.open_t').removeClass('open_t');
            return false;
        }
        $('.open_t').not($(this).parents('ul')).removeClass('open_t');
        $(this).next('ul').addClass('open_t');
        return false;
    });
    $(document).on('click', ':not(.has_children, .has_children *)', function() {
        if( $('.open_t').length > 0 ) {
            $('.open_t').removeClass('open_t');
            $('.open_t').parent().removeClass('open');
            return false;
        }
    });

    // hide #back-top first
    $("#back-top").hide();

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });

});

// WOW Activate
new WOW().init();

jQuery(document).ready(function() { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'});
})


// full-width-checkbox
$("[name='full-width-checkbox']").bootstrapSwitch();

/*
//Load 'about', then Scroll to founders
function founders(e) {
     e.preventDefault();
     location.href = "about.html";
     window.onload = function() {
       $(window).scrollTop($("h3:contains('Founders'):last").offset().top);
   })
 });
 */
/*
 $("#founderslink").on('click' function ()  {
   location.href = "about.html";
    var i = setInterval(function ()
    {
        if ($('#founders').length)
        {
            clearInterval(i);
            // safe to execute your code here
            $(window).scrollTop($("h3:contains('Founders'):last").offset().top);
        }
    }, 100);
});
*/
