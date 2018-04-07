var navHeight = 50;

/**
 * Provided by bootstrap template. Make the scroll all fancy with transitions.
 */
function setupPageScroll() {
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - navHeight)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: navHeight + 1
    });
}


function setupLogin() {
    var loginButton = $('#login-button');
    var userIcon = $('#user-icon');
    
    loginButton.bind('click', function (event) {
        userIcon.src('YOUR IMAGE LINK');
        loginButton.text('Welcome!');
        event.preventDefault();
    })
}


// Will run when the page loads
$(() => {
    setupPageScroll();
    setupLogin();
});
