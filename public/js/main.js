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
        userIcon.attr('src', 'https://lh3.googleusercontent.com/-uaINHx2ldrc/AAAAAAAAAAI/AAAAAAAAAAA/ACLGyWBTPtjfQOWmhSsV3J1NtUcS4k0yrw/s96-c-mo/photo.jpg');
        loginButton.text('Welcome!');
        event.preventDefault();
    })
}


// Will run when the page loads
$(() => {
    setupPageScroll();
    setupLogin();
});
