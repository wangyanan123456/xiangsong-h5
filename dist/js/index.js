window.onload=function(){function s(){++d>c.length-1&&(d=0);var s=d*r*-1;v.css("left",s),o(d)}function o(s){for(var o=0;o<l.length;o++)$(l[o]).css("background-color","red");$(l[s]).css("background-color","yellow")}function e(){clearInterval(u),u=setInterval(s,2e3)}var n=$(".wrap"),i=$("#last"),a=$("#next"),l=$(".wrap li"),c=$(".wrap img"),v=$("#middle"),r=n.width();v.width(r*c.length);var d=0,u=setInterval(s,2e3);a.on("click",function(){s(),e()}),i.on("click",function(){--d<0&&(d=c.length-1);var s=r*d*-1;v.css("left",s),o(d),e()});for(var t=0;t<l.length;t++)!function(s){$(l[t]).on("mouseover",function(){var n=r*(d=s)*-1;v.css("left",n),e(),o(s)})}(t);n.on("mouseover",function(){clearInterval(u)}),n.on("mouseout",function(){e()}),$(".know").click(function(){$(".box div:first-child").removeClass("zhezhao"),$("body div:first-child").removeClass("block"),$(".close").css("display","none"),$(".app").css("display","block"),$(".know").css("display","none")}),$(".shouye").click(function(){$(".box").css("display","block"),$(".guanyu").css("display","none"),$(".joinme").css("display","none"),$(".custome").css("display","none"),$(".koubei div").removeClass("hover"),$(".shouye div").addClass("hover"),$(".aboutsong div").removeClass("hover"),$(".join div").removeClass("hover"),$(".range_song").css("display","none")}),$(".aboutsong").click(function(){$(".box").css("display","none"),$(".joinme").css("display","none"),$(".guanyu").css("display","block"),$(".custome").css("display","none"),$(".koubei div").removeClass("hover"),$(".aboutsong div").addClass("hover"),$(".shouye div").removeClass("hover"),$(".join div").removeClass("hover"),$(".range_song").css("display","none"),$(".range_song").css("display","none")}),$(".koubei").click(function(){$(".box").css("display","none"),$(".joinme").css("display","none"),$(".guanyu").css("display","none"),$(".custome").css("display","block"),$(".aboutsong div").removeClass("hover"),$(".shouye div").removeClass("hover"),$(".join div").removeClass("hover"),$(".koubei div").addClass("hover"),$(".range_song").css("display","none")}),$(".join").click(function(){$(".box").css("display","none"),$(".joinme").css("display","block"),$(".guanyu").css("display","none"),$(".custome").css("display","none"),$(".koubei div").removeClass("hover"),$(".aboutsong div").removeClass("hover"),$(".shouye div").removeClass("hover"),$(".join div").addClass("hover"),$(".range_song").css("display","none")}),$(".range").click(function(){$(".range_song").css("display","block"),$(".box").css("display","none"),$(".joinme").css("display","none"),$(".guanyu").css("display","none"),$(".custome").css("display","none"),$(".koubei div").removeClass("hover"),$(".aboutsong div").removeClass("hover"),$(".shouye div").removeClass("hover"),$(".join div").removeClass("hover")})};