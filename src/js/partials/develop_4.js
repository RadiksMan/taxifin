function googleMap(mapWrap){
    function initialize() {
        var myLatlng = new google.maps.LatLng(cordX,cordY);
        var myLatlng1 = new google.maps.LatLng(cordX1,cordY1);
        var myLatlng2 = new google.maps.LatLng(cordX2,cordY2);
        var centerM = new google.maps.LatLng(cX,cY);
        var myOptions = {
            zoom: 11,
            center: centerM,
            draggable: true,
            zoomControl: true,
            scrollwheel: false,
            disableDefaultUI: false, //без управляющих елементов
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControlOptions: {
               position: google.maps.ControlPosition.LEFT_BOTTOM
            }
        }
        var map = new google.maps.Map(document.getElementById(mapWrap), myOptions);

        var contentString = '<div class="marker-test">'+googleText+'</div>';
        var contentString1 = '<div class="marker-test">'+googleText1+'</div>';
        var contentString2 = '<div class="marker-test">'+googleText2+'</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        var infowindow1 = new google.maps.InfoWindow({
            content: contentString1
        });
        var infowindow2 = new google.maps.InfoWindow({
            content: contentString2
        });
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Мы тут',
            optimized: false,
            visible: true,
            flat: true,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 4,
                fillColor: '#fff',
                fillOpacity: 1,
                strokeColor: '#FF3232',
                strokeWeight: 10
            },
        });
        var marker1 = new google.maps.Marker({
            position: myLatlng1,
            map: map,
            title: 'Мы тут',
            optimized: false,
            visible: true,
            flat: true,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 4,
                fillColor: '#fff',
                fillOpacity: 1,
                strokeColor: '#FF3232',
                strokeWeight: 10
            },
        });
        var marker2 = new google.maps.Marker({
            position: myLatlng2,
            map: map,
            title: 'Мы тут',
            optimized: false,
            visible: true,
            flat: true,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 4,
                fillColor: '#fff',
                fillOpacity: 1,
                strokeColor: '#FF3232',
                strokeWeight: 10
            },
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });
        google.maps.event.addListener(marker1, 'click', function() {
            infowindow1.open(map,marker1);
        });
        google.maps.event.addListener(marker2, 'click', function() {
            infowindow2.open(map,marker2);
        });
    }
    initialize();
}
function fancyform(){
    $('.fancyform').fancybox({
        openEffect  : 'fade',
        closeEffect : 'fade',
        autoResize:true,
        wrapCSS:'fancybox-form',
        fitToView:true,
        padding:'10',
    });
}

function fancyformMaskedinput(){
    $('.tel-mask').mask('+9 (999) 999-99-99 ');
}

function fixTopHeader(){
    $(window).scroll(function() {
        if($(this).scrollTop() > $('.header-top').outerHeight()){
            $('.header-bottom').addClass('fixed');
        }else{
            $('.header-bottom').removeClass('fixed');
        }
    });
}
$(document).ready(function(){
    fixTopHeader();
    fancyform();
    googleMap('mapInit');
    fancyformMaskedinput();
});

$(window).load(function(){

});

$(window).resize(function(){

});