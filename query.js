$(document).ready(function(){
    $("#play").click(function(){
        $(".play").css({"display":"none"});
        $(".subject").css({"display":"none"});
        $(".you").css({"display":"block"});
        $(".background").css({"display":"block"});
        var audio = document.getElementById("audio");
        audio.play();
        setInterval(function(){ 
            $(".cake").css({"display":"block"});
        },8000);
        setInterval(function(){ 
            $(".happy").css({"display":"block"});
        },18000);
        setInterval(function(){ 
            $(".hieuung").css({"display":"block"});
        },20000);
    });
});

