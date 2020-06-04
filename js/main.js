$(document).ready(function(){
    flexSlider();
    mapHeight();
    vidAll();
    quesAll();
    passAll();
});

function vidAll(){
    Vid1();
    Vid2();
    Vid3();
    Vid4();
    Vid5();
}

function quesAll(){
    quesYes();
    quesNo();
}

function passAll(){
    passClick();

}

function flexSlider(){
    $('.flexslider').flexslider({
        animation:"slide",
        animationLoop:true,
        slideshowSpeed:3000,
        animationSpeed:500,
        touch: true,
        directionNav: true,
        smoothHeight: false
    });
}

function mapHeight(){
    var getHeight = $("body").height();
    var imageHeight = $(".mapinteractive img").height();
    var imageWidth = $(".mapinteractive img").width();
    //console.log('wind height = '+getHeight);
    if(getHeight <= 667){
        //for smaller devices
        $(".mapinteractive .blink_wrap").css({"height":imageHeight,"width":imageWidth,"top":"calc(50vh - " + imageHeight + "px / 2)","left":"calc(50vw - " + imageWidth + "px / 2)"});
        $(".mapinteractive img").css({"top":"calc(50vh - " + imageHeight + "px / 2)","left":"calc(50vw - " + imageWidth + "px / 2)"});

    }else{
        //for larger devices
        $(".mapinteractive .blink_wrap").css({"height":imageHeight,"width":imageWidth,"top":"calc(50vh - " + imageHeight + "px / 2)","left":"calc(50vw - " + imageWidth + "px / 2)"});
        $(".mapinteractive img").css({"top":"calc(50vh - " + imageHeight + "px / 2)","left":"calc(50vw - " + imageWidth + "px / 2)"});

        //btn position
        $(".btn").css({"bottom":"6%","right":"34px"});
        //video positoin
        $("video").css({"bottom":"0px"});
        //question wrap position
        $(".ques_wrap").css({"top":"260px"});
        //password wrap position
        $(".pass_wrap").css({"top":"260px"});
        //slider wrap position
        $(".flexslider").css({"top":"80px"});
        //countdown position
        $(".count_wrap").css({"top":"130px"});
        //spinner position
        $(".preloader").css({"top":"300px"});
    }
}
var who;
function Vid1(){
    $(".map .blink_wrap p").on('click',function(){
      who = (this.id);
      console.log(who);
        //spinner
        $(".preloader").fadeIn(300);
        var targetVid = $('#'+who+'.vid1');

        var timer = setInterval(function(){
            var vidload = $('#'+who+'.vid1').prop('readyState');
            if(vidload == 4){
                //console.log('video loaded');
                clearInterval(timer);
                $(".preloader").fadeOut(300);
            }else{
                //console.log('video not loaded');
            }
        }, 100);

        //video
        $(".map").stop().fadeOut(300);

        $('#'+who+'.vid1').fadeIn(300);
        $('#'+who+'.vid1')[0].play();

        //body background-image none
        $("body").css({"background-image":"none"});
    });

    $('.vid1').on('ended',function(){
        $('.btn li:nth-child(1)').fadeIn(300);
    });
}

function Vid2(){;
    $(".btn li:nth-child(1)").on('click',function(){
      console.log(who);
      console.log('vid2fxnstarted');
        $('#'+who+'.vid1').fadeOut(300);
        $('#'+who+'.vid1')[0].pause();
        $('#'+who+'.vid1')[0].currentTime = 0;
        $(".btn li:nth-child(1)").fadeOut(300);

        //spinner
        $(".preloader").fadeIn(300);
        var targetVid = $('#'+who+'.vid2');

        var timer = setInterval(function(){
            var vidload = $('#'+who+'.vid2').prop('readyState');
            if(vidload == 4){
                //console.log('video loaded');
                clearInterval(timer);
                $(".preloader").fadeOut(300);
            }else{
                //console.log('video not loaded');
            }
        }, 100);

        $('#'+who+'.vid2').fadeIn(300);
        $('#'+who+'.vid2')[0].play();
    });

    $('.vid2').on('ended',function(){
        $('.btn li:nth-child(2)').fadeIn(300);
    });
}

function Vid3(){
    $(".btn li:nth-child(2)").on('click',function(){
        $(".btn li:nth-child(2)").fadeOut(300);

        $('.ques_wrap').fadeIn(300);
        $('.blanket').fadeIn(300);
    });
}

function quesYes(){
    $(".ques_wrap li:nth-child(2)").on('click',function(){
        $(".ques_wrap").fadeOut(300);
        $('.blanket').fadeOut(300);

        $('#'+who+'.vid2')[0].pause();
        $('#'+who+'.vid2')[0].currentTime = 0;
        $('#'+who+'.vid2').fadeOut(300);

        //spinner
        $(".preloader").fadeIn(300);
        var targetVid = $('#'+who+'.vid3');

        var timer = setInterval(function(){
            var vidload = $('#'+who+'.vid3').prop('readyState');
            if(vidload == 4){
                //console.log('video loaded');
                clearInterval(timer);
                $(".preloader").fadeOut(300);
            }else{
                //console.log('video not loaded');
            }
        }, 100);

        $('#'+who+'.vid3').fadeIn(300);
        $('#'+who+'.vid3')[0].play();
    });

    $('.vid3').on('ended',function(){
        $('.btn li:nth-child(3)').fadeIn(300);
    });
}

function quesNo(){
    $(".ques_wrap li:nth-child(3)").on('click',function(){
        $(".ques_wrap").css({"display":"none"});
        $('.blanket').css({"display":"none"});

        $('#'+who+'.vid2')[0].pause();
        $('#'+who+'.vid2')[0].currentTime = 0;
        $('#'+who+'.vid2').css({"display":"none"});

        $('.map').delay(1000).fadeIn(3000);

        //body background-image
        $("body").css({"background-image":"url(../img/map-bg2.png)"});
    });
}

function Vid4(){
    $(".btn li:nth-child(3)").on('click',function(){
        $(".btn li:nth-child(3)").fadeOut(300);

        $('.pass_wrap').fadeIn(300);
        $('.blanket').fadeIn(300);
    });
}

function passClick(){
    $(".pass_wrap span").on('click',function(){

        var getTxt = $(".pass_wrap input").val().toLowerCase();
        var getPass = CryptoJS.MD5(getTxt);

        if(who == "ten" && getPass == "cd8bf186c324ac6ce7cdad6146095f8c" || who == "kun" && getPass == "7e032a225c76f10a86015ddc940f2490" || who == "winwin" && getPass == "cfc70620572c93191a4ad8dc126331e5" || who == "lucas" && getPass == "e54f0f6c95f9f9bd43ea0e266b0ef4ca"){
            //correct
            //insert img in slider : 퍼가기 방지
            $('#'+who+'.vid3')[0].pause();
            $('#'+who+'.vid3')[0].currentTime = 0;
            $('#'+who+'.vid3').fadeOut(300);

            $('#'+who+'.vid4')[0].pause();
            $('#'+who+'.vid4')[0].currentTime = 0;
            $('#'+who+'.vid4').fadeOut(300);

            $(".pass_wrap").fadeOut(300);
            $('.blanket').fadeOut(300);
            $('#'+who+'.slider_wrap').css({"z-index":"1"});
            $('#'+who+'.slider_wrap').animate({"opacity":"1"},3000);

        }else{
            //wrong
            $('#'+who+'.vid3')[0].pause();
            $('#'+who+'.vid3')[0].currentTime = 0;
            $('#'+who+'.vid3').fadeOut(300);
            $(".pass_wrap").fadeOut(300);
            $('.blanket').fadeOut(300);

            //spinner
            $(".preloader").fadeIn(300);
            var targetVid = $('#'+who+'.vid4');

            var timer = setInterval(function(){
                var vidload = $('#'+who+'.vid4').prop('readyState');
                if(vidload == 4){
                    //console.log('video loaded');
                    clearInterval(timer);
                    $(".preloader").fadeOut(300);
                }else{
                    //console.log('video not loaded');
                }
            }, 100);

            $('#'+who+'.vid4').fadeIn(300);
            $('#'+who+'.vid4')[0].play();
        }

        $('.vid4').on('ended',function(){
            $('.btn li:nth-child(4)').fadeIn(300);
        });
    });
}

function Vid5(){
    $(".btn li:nth-child(4)").on('click',function(){
        $(".btn li:nth-child(4)").fadeOut(300);

        $('.pass_wrap').fadeIn(300);
        $('.blanket').fadeIn(300);
    });
}

function disableRightclick(){
    $("img").on("contextmenu",function(){
       return false;
    });
}
