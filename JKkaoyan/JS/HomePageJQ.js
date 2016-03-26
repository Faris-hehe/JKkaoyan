/**
 * Created by Administrator on 2016/1/17 0017.
 */
$(document).ready(function(){
    var arrImg = ['ad2.jpg','ad3.jpg','ad4.jpg'];
    var str = 'img/imgBox/';
    var num = 0;
    var timer = null;

    /*轮播图*/
    change();
    auto();
    for(var i=0;i<arrImg.length;i++){
        $('#btnBox').append( $('<li class="imgBtn"></li>') );
    }
    function change(){
        $('#imgAd').attr('src',str.concat(arrImg[num]));
        $('.imgBtn').css('backgroundColor','white');
        $('.imgBtn').eq(num).css('backgroundColor','red');
    }
    $('.imgBtn').click(function(){
        num = $(this).index();
        change()
    })
    function auto(){
        timer =setInterval(function(){
            num++;
            if(num == arrImg.length){
                num = 0;
            }
            change();
        },2000)
    }
    $('#btnBox').mouseover(function(){
        clearInterval(timer);
    })
    $('#btnBox').mouseout(function(){
        auto();
    })

    /*导航栏*/
    $('.menuBar').mouseenter(function(){
        $(this).children('.menu2').slideDown()
    })
    $('.menuBar').mouseleave(function(){
        $(this).children('.menu2').slideUp('fast')
    })
})
