/**
 * Created by 李皖 on 2017/8/4.
 */



//$(".main-bot .left").click(function(){
//    $(".main .main-bot ul").fadeOut(1000).fadeIn(1000);
//    //$(".main .main-bot ul").fadeIn(1000);
//});
//$(".main-bot .right").click(function(){
//    $(".main .main-bot ul").fadeOut(1000).fadeIn(1000);
//    //$(".main .main-bot ul").fadeIn(1000);
//});




//console.log($(".anli1 img").get(0));
//console.log($(".main2-bot-lt .dian ul li:nth-child(1)").get(0));
$(".main2-bot-lt .dian ul li:nth-child(1)").click(function(){
    //alert(1);
    $(".anli1 img").attr("src","img/anli_1.png");
    $(".anli2 img").attr("src","img/anli_2.png");
    $(".anli3 img").attr("src","img/anli_3.png")
});
$(".main2-bot-lt .dian ul li:nth-child(2)").click(function(){
    $(".anli1 img").attr("src","img/anli_2.png");
    $(".anli2 img").attr("src","img/anli_3.png");
    $(".anli3 img").attr("src","img/anli_1.png")
});
$(".main2-bot-lt .dian ul li:nth-child(3)").click(function(){
    $(".anli1 img").attr("src","img/anli_3.png");
    $(".anli2 img").attr("src","img/anli_1.png");
    $(".anli3 img").attr("src","img/anli_2.png")
});



var kk=0;
var len=$(".ul1").length;
$(".main .left").click(function(){
    kk--;
    if(kk<0){
        kk=len-1;
    }
    $(".ul1").hide();
    $(".ul1").eq(kk).show();
});
$(".main .right").click(function(){
    kk++;
    if(kk>len-1){
        kk=0;
    }
    $(".ul1").hide();
    $(".ul1").eq(kk).show();
});