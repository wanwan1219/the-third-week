/**
 * Created by 123 on 2017/8/7.
 */
var k=0;
var len=$(".ban1 ul li").length;
var right=function(){
    k++;
    if(k>len-1){
        k=0;
    }
    $('.ban1 ul li').eq(k).addClass("col").siblings().removeClass("col")
    $('.ban1 img').hide().eq(k).show();
};
$(".ban1 .clik .prev").click(function (){
    k--;
    if(k<0){
        k=len-1;
    }
    $('.ban1 ul li').eq(k).addClass("col").siblings().removeClass("col")
    $(".ban1 img").hide().eq(k).show();
});
$(".ban1 .clik .next").click(function(){
    right()
});
var timer=setInterval(right,900);
$(".ban1").mouseover(function(){
    clearInterval(timer);
});
$(".ban1").mouseout(function(){
    timer=setInterval(right,900);
});
var timer1=null;
$(".ban1 .main-mid ul li").mouseover(function(){
    clearTimeout(timer1);
    var g=$(this);
    timer1=setTimeout(function(){
        k=g.index();
        $(g).addClass("col").siblings().removeClass("col");
        $(".ban1 img").hide().eq(k).show();
    },200)
});

$(".rt_mid ul li").mouseover(function(){
    var m=$(this).index();
    $(this).addClass("zi").siblings().removeClass("zi");
    $(".rt_mid div").hide().eq(m).show()
});
$(".rt_bot ul li").mouseover(function(){
    var n=$(this).index();
    $(this).addClass("zi").siblings().removeClass("zi");
    $(".rt_bot div").hide().eq(n).show()
});