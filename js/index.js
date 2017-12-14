window.onload = function() {
   var $wrap =$(".wrap");
        var $last = $("#last");
        var $next = $("#next");
        var $lis = $(".wrap li");
        var $imgs = $(".wrap img");
        var $middle = $("#middle");

        var $w = $wrap.width();
        $middle.width($w*$imgs.length);
        var index = 0;

        function creatFn(){
            index++
            if(index>$imgs.length-1){
                index=0;
            };
            var $left = index*$w *-1;
            $middle.css("left",$left);
            chnageLi(index)
        };

        function chnageLi(num){
            for( var i=0;i<$lis.length;i++){
                $($lis[i]).css("background-color","red");
            }
            $($lis[num]).css("background-color","yellow");
        };
        
        var timer = setInterval(creatFn,2000);

        function clear(){
            clearInterval(timer);
            timer = setInterval(creatFn,2000);
        };
        
        $next.on('click',function(){
            creatFn();
            clear();
        });
        
        $last.on("click",function(){
            index--
            if(index<0){
                index = $imgs.length-1;
            }
            var $left = $w * index * -1;
            $middle.css("left",$left);
            chnageLi(index);
            clear();
        })
        
        for(var i=0;i<$lis.length;i++){
            
            (function(num){

                $($lis[i]).on("mouseover",function(){
                    index = num;
                    var $left = $w*index*-1;
                    $middle.css("left",$left)
                    clear();
                    chnageLi(num);
                });
            
            })(i);
        }
    
        $wrap.on("mouseover",function(){
            clearInterval(timer);
        })
        
        $wrap.on("mouseout",function(){
            clear();
        })
        
    $('.shouye').click(function(){
        $('.box').css("display","block")
        $('.guanyu').css("display","none")
        $('.joinme').css("display","none")
        $('.custome').css('display','none')
        $('.koubei div').removeClass('hover')
        $('.shouye div').addClass('hover')
        $('.aboutsong div').removeClass('hover')
        $('.join div').removeClass('hover')
    })
    $('.aboutsong').click(function(){
        $('.box').css("display","none")
        $('.joinme').css("display","none")
        $('.guanyu').css("display","block")
        $('.custome').css('display','none')
        $('.koubei div').removeClass('hover')
        $('.aboutsong div').addClass('hover')
        $('.shouye div').removeClass('hover')
        $('.join div').removeClass('hover')
    })
    $('.koubei').click(function(){
        $('.box').css("display","none")
        $('.joinme').css("display","none")
        $('.guanyu').css("display","none")
        $('.custome').css('display','block')
        $('.aboutsong div').removeClass('hover')
        $('.shouye div').removeClass('hover')
        $('.join div').removeClass('hover')
        $('.koubei div').addClass('hover')
    })
    $('.join').click(function(){
        $('.box').css("display","none")
        $('.joinme').css("display","block")
        $('.guanyu').css("display","none")
        $('.custome').css('display','none')
        $('.koubei div').removeClass('hover')
        $('.aboutsong div').removeClass('hover')
        $('.shouye div').removeClass('hover')
        $('.join div').addClass('hover')
    })

}

 