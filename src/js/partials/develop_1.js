function headerMenuToggle(){

    $('.header-menu-icon').click(function(){
        $('.header-bottom').slideDown(300);
    });

    $('.header-bottom-title-wrap').click(function(){
        $('.header-bottom').slideUp(300);
    });

}

function goTo(){
    var head = 51;
    if($(window).width() < 1024){
        head = 0;
    }
    if($(window).width() < 768){
        head = 0;
    }
    $('.header-menu a').click(function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        var target = $(href).offset().top-head;
        $(scroller).animate({scrollTop:target},500);
    });

};

$(document).ready(function(){

});

$(window).load(function(){

    headerMenuToggle();
    goTo();

});

$(window).resize(function(){

});