$(function(){
    var clienth=document.documentElement.clientHeight;
    $(".section").css("height",$(window).height());
    $(window).resize(function(){
        var clienth=document.documentElement.clientHeight;
        $(".section").css("height",$(window).height());
    })
    var flag=true;
    $(".meau").on("click",function(){
        if(flag){
            $(".meau>span:first-child").css({"transform":"translate(0,4px) rotate(45deg)"});
            $(".meau>span:last-child").css({"transform":"translate(0,-8px) rotate(-45deg)"});
            $(".meau-con").show("1000,linear");
           /* $(".meau-con>li").each(function(index,obj){
                $(obj).find(".meau-con>li").css("translation","transform 0.1s ease "+index*0.1+"s");
            });
            $(".meau-con>li").css("transform","scale(1,1)");*/
            flag=false;
        }else{
            $(".meau>span:first-child").css({"transform":"translate(0,0) rotate(0)"});
            $(".meau>span:last-child").css({"transform":"translate(0,0) rotate(0)"});
            $(".meau-con").hide("1000,linear");
            flag=true;
        }
    })
    var num=0;
    $(".down").on("click", function (){
        num++;
        $(".yd").css("background","transparent").eq(num).css("background","#000");
        $(".section").eq(0).css("marginTop",-num*clienth+"px");
        $(".section").each(function(index,obj){
            if(index==num){
                $(obj).find(".section2-left").css({"transform":"translateX(50px)","opacity":1});
                $(obj).find(".section2-right").css({"transform":"translateX(-50px)","opacity":1});
            }else{
                $(obj).find(".section2-left").css({"transform":"translateX(0)","opacity":0});
                $(obj).find(".section2-right").css({"transform":"translateX(0)","opacity":0});
            }
        })
        if(num>=1){
            $(".nav-login").css("display","block");
        }else {
            $(".nav-login").css("display","none");
        }
    });
    $(document).on("mousewheel DOMMouseScroll",function(e){
        /*console.dir(e)*/
        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
            (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));
        var flag=true;
        if (delta > 0) {
            // 向上滚
            if(num==0){
                num=0
            }else{
                num--;
                $(".section").eq(0).css("marginTop",-num*clienth+"px");
            }
        } else if (delta < 0) {
            // 向下滚
            if(num>=3){
                num=3;
            }else{
                num++;
                $(".section").eq(0).css("marginTop",-num*clienth+"px");
            }
        }
        $(".yd").css("background","transparent").eq(num).css("background","#000");
        $(".section").each(function(index,obj){
            if(index==num){
                $(obj).find(".section2-left").css({"transform":"translateX(50px)","opacity":1});
                $(obj).find(".section2-right").css({"transform":"translateX(-50px)","opacity":1});
            }else{
                $(obj).find(".section2-left").css({"transform":"translateX(0)","opacity":0});
                $(obj).find(".section2-right").css({"transform":"translateX(0)","opacity":0});
            }
        })
        if(num>=1){
            $(".nav-login").css("display","block");
        }else {
            $(".nav-login").css("display","none");
        }
    })
    $(".yd").on("click",function(){
        $(".yd").css("background","transparent");
        $(this).css("background","#000");
        var index=$(this).index();
        num=index;
        $(".section").eq(0).css("marginTop",-num*clienth+"px");
        $(".section").each(function(index,obj){
            if(index==num){
                $(obj).find(".section2-left").css({"transform":"translateX(50px)","opacity":1});
                $(obj).find(".section2-right").css({"transform":"translateX(-50px)","opacity":1});
            }else{
                $(obj).find(".section2-left").css({"transform":"translateX(0)","opacity":0});
                $(obj).find(".section2-right").css({"transform":"translateX(0)","opacity":0});
            }
        })
        if(num>=1){
            $(".nav-login").css("display","block");
        }else {
            $(".nav-login").css("display","none");
        }

    });




})