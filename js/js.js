$(function () {
//    导航
    $(".nav li").hover(function () {
        $(this).addClass('active').siblings().removeClass('active');
    },function () {
        $(this).removeClass('active');
    })

    $(".news-btn li").hover(function () {
        var nsNow = $(this).index();
        $(".news-list ul").eq(nsNow).show().siblings().hide();
    })
})