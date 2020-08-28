$(function() {
    var menuHeight = $("#header-fixed").height();
    var navPos = 0;
    $(window).scroll(function () {
        var Pos = $(this).scrollTop();
        if (Pos > navPos) {
            if ($(window).scrollTop() >= 100) {
                $("#header-fixed").css("top", "-" + menuHeight + "px");
            }
        } else {
            $("#header-fixed").css("top", "0px");
        }
        navPos = Pos;
    });
});