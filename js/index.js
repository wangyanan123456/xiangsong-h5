window.onload = function() {
    console.log(88)
    var mySwiper = new Swiper ('.swiper-container', {
        //上下 
        // direction:'vertical',
        direction: 'horizontal',
        // 是否 循环
        loop:true,
        autoplay: 1000,
        autoplayDisableOnInteraction : false,
        // grabCursor: true,
        // paginationClickable: true,
        // 如果需要 分页器
        pagination:'.swiper-pagination',
        // 如果需要前进后退按钮
        nextButton:".swiper-button-next",
        prevButton:".swiper-button-prev",
        //如果需要滚动条
        // scrollbar:'.swiper-scrollbar'
    })

    $('.shouye').click(function(){
        console.log(676)
        $('.box').css("display","block")
        $('.two').css("display","none")
        $('.joinme').css("display","none")
        $('.shouye div').addClass('hover')
        $('.aboutsong div').removeClass('hover')
        $('.join div').removeClass('hover')
    })
    $('.aboutsong').click(function(){
        console.log(676)
        $('.box').css("display","none")
        $('.joinme').css("display","none")
        $('.two').css("display","block")
        $('.aboutsong div').addClass('hover')
        $('.shouye div').removeClass('hover')
        $('.join div').removeClass('hover')
    })
    $('.join').click(function(){
        console.log(676)
        $('.box').css("display","none")
        $('.joinme').css("display","block")
        $('.two').css("display","none")
        $('.aboutsong div').removeClass('hover')
        $('.shouye div').removeClass('hover')
        $('.join div').addClass('hover')
    })




}

 