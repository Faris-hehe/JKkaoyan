/**
 * Created by Administrator on 2016/1/17 0017.
 */

window.onload = function(){
    var arrImg = ['ad2.jpg','ad3.jpg','ad4.jpg'];
    var oImg = document.getElementById('imgAd');
    var oBtnbox = document.getElementById('btnBox');
    var aBtn = oBtnbox.getElementsByTagName('li');
    var str = 'img/imgBox/';
    var num = 0;
    var timer = null;
    for(var i=0;i<arrImg.length;i++){
        oBtnbox.innerHTML += '<li class="imgBtn"></li>'
    }

    change();
    auto();
    function change(){
            oImg.src = str.concat(arrImg[num]);
            for(var i=0;i<arrImg.length;i++){
                aBtn[i].style.backgroundColor = 'white';
                aBtn[num].style.backgroundColor = 'red';
            }
        }
    for(var i=0;i<arrImg.length;i++){
            aBtn[i].index = i;
            aBtn[i].onclick = function(){
                num = this.index;
                change()
            }
        }
    function auto(){
            timer = setInterval(function(){
                num++;
                if(num>=arrImg.length){
                    num=0
                }
                change();
            },3000)
        }
    oBtnbox.onmouseover = function(){
        clearInterval(timer);
    }
    oBtnbox.onmouseout = function(){
        auto()
    }
}
