$(document).ready(function() {
    //start

    // burger menu
    $(".burger").click(function(){
        console.info("I was clicked Burger Menu!");
        $("nav").slideToggle();
    });

    // image slider
    $("#lightSlider").lightSlider({
            item: 1,
            loop:true,
            slideMargin: 0,
    });
    
    //end
})
