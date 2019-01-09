export function theme() {

    // Get started!
    function setBackgroundPosition() {
        $(".background").css("background-position", "50% " + ($(this).scrollTop() / 2) + "px");
    }
    $(window).scroll(function() {
        $('.logo').css({
            'bottom': -($(this).scrollTop() / 5) + "px" // increase # to make even slower
        });
    });
    $(window).scroll(function() {
        setBackgroundPosition();
    })
    $(window).resize(function() {
        setBackgroundPosition();
    });

    $(function() {
        $(".flipper").flip({
            trigger: "hover",
            autoSize: false
        });
    });

}

export default theme;
