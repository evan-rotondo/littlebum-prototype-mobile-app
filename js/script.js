$(window).on("load", start);



//fuunction for the carousel plug-in to engage//
function start() {
    //$("body").css("background-color", "pink");
    $('.slideshow').slick({
        //setting-name: setting-value
        prevArrow: null,
        nextArrow: null
        
        
      });
        //setting-name: setting-value
    }

//function for the events page sign-up to toggle//
    $(document).ready(function(){
        $("i").click(function(){
            $(this).toggleClass("text-dark");
        });
    });

//trying to toggle log in field on home page//
    $(`#login`).click(function(){
        $(`#logbox`).slideToggle('slow');
    });