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


}

 