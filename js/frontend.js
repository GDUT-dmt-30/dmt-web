$('.frontend-a').hover(function(){
    $('.detail').css("visibility","visible");
    $('.detail').addClass("animated fadeIn")
},function(){    
    $('.detail').css("visibility","hidden");
    $('.detail').removeClass("animated fadeIn")

});

$('.detail').hover(function(){
    $('.detail').css("visibility","visible");
},function(){
    $('.detail').css("visibility","hidden");

})