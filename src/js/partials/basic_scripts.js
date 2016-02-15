(function(e,t,n){"use strict";var r,i;e.uaMatch=function(e){e=e.toLowerCase();var t=/(opr)[\/]([\w.]+)/.exec(e)||/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];var n=/(ipad)/.exec(e)||/(iphone)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0",platform:n[0]||""}};r=e.uaMatch(t.navigator.userAgent);i={};if(r.browser){i[r.browser]=true;i.version=r.version}if(r.platform){i[r.platform]=true}if(i.chrome||i.opr){i.webkit=true}else if(i.webkit){i.safari=true}if(i.rv){i.msie=true}if(i.opr){i.opera=true}e.browser=i})(jQuery,window)

var scroller=jQuery.browser.webkit ? "body": "html";

/* input only Number  */
function inputNumber(block) {
    $('input', block).keypress(function(e) {
        if (e.which >= 47 && e.which <= 57 ){}
        else return false;
    });

    $('input', block).keyup(function() {
        $inputNum = $(this);
        if ($inputNum.val == '' || $inputNum.val() == 0) {
            $inputNum.val('');
        }
    });
}

/* scrollUp */
function scrollUp(block,targetBlock) {

    $(block).click(function(e){
        var target = $(targetBlock).offset().top;

        $(scroller).animate({scrollTop:target},800);
        return false;

        e.preventDefault();
    });
}

function initScrollpane(){
    $('.scroll-pane').jScrollPane();
}


function oneHeightItems(){

    function oneHeight(block){
        var height=0;
        block.removeAttr('style');
        block.each(function(){
            if($(this).height()>height){
                height=$(this).height();
            }
        });
        block.css('height', height);
    }

    oneHeight($('.oneHeight'));
}

function animationBlock(item){

    $(window).scroll(function(){
        checkForAnimate();
    });

    function checkForAnimate(){
        var bottomCheck = $(window).height()+$(window).scrollTop();
        var windowTop = $(window).scrollTop()+($(window).height()/1.5);
        item.each(function(){
           if(windowTop>$(this).offset().top || bottomCheck > $('body').height()*0.98){

              var itemSect = $(this);
              var point = 0;
              itemSect.find('.animate-it').addClass('animated');

              var timer = setInterval(function(){
                 itemSect.find('.animate-delay').eq(point).addClass('animated');
                 point++;
                 if(itemSect.find('.animate-delay').length == point){
                     clearInterval(timer);
                 }
              },200);


           }
        });
    }
    checkForAnimate();
}
function showHideArrow(){
    $(window).scroll(function() {
        if($(window).scrollTop() > 300){
            $('.arrow-top').fadeIn('slow');
        }else{
            $('.arrow-top').fadeOut('slow');
        }
    });
}




/* DOCUMENT READY  */
$(document).ready(function() {
    showHideArrow();
    oneHeightItems();
     scrollUp('.arrow-top','body');
});

$(window).load(function(){

  animationBlock($('.animate-section'));

  $('.footer_placeholder').height($('.footer').outerHeight());

});

$(window).resize(function() {

    $('.footer_placeholder').height($('.footer').outerHeight());
});