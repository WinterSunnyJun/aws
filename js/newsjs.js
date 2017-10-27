$(function () {
//    导航
    $(".nav li").hover(function () {
        $(this).addClass('active').siblings().removeClass('active');
    },function () {
        $(this).removeClass('active');
    })

    $(".banner-btn li").hover(function () {
        var banNow = $(this).index();
        $(".banner-btn li").eq(banNow).addClass('active').siblings().removeClass('active');
        $(".banner-pic li").eq(banNow).show().siblings().hide();
    })

    $(".news-btn li").hover(function () {
        var nsNow = $(this).index();
        $(".news-list ul").eq(nsNow).show().siblings().hide();
    })

        $(".news-pic-btn li").click(function () {
            var newsNow = $(this).index();
            $(".news-pic-btn li").eq(newsNow).addClass('active').siblings().removeClass('active');
            $(".news-pic-list li").eq(newsNow).show().siblings().hide();
        })

    $(".ryzz-btn li").hover(function () {
        var ryNow = $(this).index();
        $(".ryzz-list li").eq(ryNow).show().siblings().hide();
    })

    $(".sgbb-list li").hover(function () {
        var sgNow = $(this).index();
        $(".sgbb-video-show li").eq(sgNow).show().siblings().hide();
    })

    $(".sgbb-zl-btn li").hover(function () {
        var zlNow = $(this).index();
        $(".sgbb-zl-btn li").eq(zlNow).addClass('active').siblings().removeClass('active');
        $(".sgbb-zl-list ul").eq(zlNow).show().siblings().hide();
    })

    $("#cp-list").bxSlider({
        mode: 'horizontal',
        moveSlides: 1,
        minSlides: 5,
        maxSlides: 5,
        slideWidth: 222,
        slideMargin:10,
        speed: 1000,
        auto:true
    })

    $(".footer-back").click(function () {
        $('body').animate({scrollTop:'0'},800);
    })

    var timerID = null,
    s =-28,
        resetS=document.querySelector('.sgbb-list').scrollTop;
    start();
    document.querySelector('.sgbb-list').addEventListener('mouseover',stop,false);
    document.querySelector('.sgbb-list').addEventListener('mouseout',start,false);
    function start() {
        stop();
        timerID = setInterval(function () {

            if($(".sgbb-list")[0].scrollTop > 28*14){
            //             s = -28;
                // document.querySelector('.sgbb-list').setAttribute('scrollTop',resetS)
            // }else{
                $(".sgbb-list").css({"marginTop":s});
                s--;
            // console.log( $(".sgbb-list")[0].getAttribute('style').split(' ')[1]);
            console.log( $(".sgbb-list").offset().top);
            // }
        },16);

    }

    function stop() {
        window.clearInterval(timerID);
    }

})