$(document).ready(function() {
    //start

    // // layered nav selection
    // $("#showMoreCourses").click(function(){
    //     console.info("I was clicked Courses!");
    //     $("#subMenuCourses").slideToggle();
    // });
    // $("#showMoreInfo").click(function(){
    //     console.info("I was clicked Info!");
    //     $("#subMenuInfo").slideToggle();
    // });
    
    // burger menu
    $(".burger").click(function(){
        console.info("I was clicked Burger Menu!");
        $("nav").slideToggle();
    });

    // image slider
    $("#lightSlider").lightSlider({
            // gallery: true,
            item: 1,
            loop:true,
            slideMargin: 0,
    });
    
    $(".submitContainer").click(function() {
        $(".popup").fadeIn();
        // $("#overlay").show();
    })
    //end
})