$(document).ready(function(){

    //first
    $(".first").mouseenter(function(){ 
    $(".contents").show("slow");
    $(".h1_1").animate({
        left : "30px"
        },800);

    $(".h1_2").animate({
        left : "30px"
        },900);

    $(".h1_3").animate({
        left : "30px"
        },1000);

    $(".box1").animate({
        left : "30px"
        },1100);
    });             

    //second
    $(".second").mouseenter(function(){
        $(".contents2").slideDown();
        $(".imgs").show();

        $(".img1").animate({
            top: "10px",
            height: "350px"
        },"slow");

        $(".img2").animate({
            top: "400px",
            height: "350px"
        },"slow");

        $(".img3").animate({
            top: "450px",
            height: "300px"
        },"slow");

        $(".img4").animate({
            top: "30px",
            height: "400px"
        },"slow");
    });

    //thard
    $(".thard").mouseenter(function(){
        $(".interiorbar").slideDown();
        $(".int1").slideDown("slow");
        $(".int2").slideDown("slow");
        
        $(".i1").show("slow");
        $(".i2").show("slow");
        $(".i1").animate({
            top: "50px",
            height: "300px"
        },"slow");

        $(".i2").animate({
            top: "50px",
            height: "300px"
        },"slow");

        $(".bottombar").show("slow");
    });

    $(".fb2").hide();
    $(".forth").mouseenter(function(){
        $(".fb1").slideDown("slow");
        $(".fb2").slideDown("slow");
        $(".fh1").slideDown();
        $(".fh2").slideDown();
        $(".forthimg").slideDown("slow");
    });

    $(".fifth").mouseenter(function(){
        $(".fifth").css("background-position" , "1%");
        $(".fifth").css("transition" , "all 3.5s");
    });
    $(".fifth").mouseleave(function(){
        $(".fifth").css("background-position" , "100%");
        $(".fifth").css("transition" , "all 3.5s");
    });

    $(".childimg").mouseenter(function(){
        $(".childimg").css("background-position" , "1%");
        $(".childimg").css("transition" , "all 3.5s");
    });
    $(".childimg").mouseleave(function(){
        $(".childimg").css("background-position" , "100%");
        $(".childimg").css("transition" , "all 3.5s");
    });

    $(".sixb2").hide();
    $(".sixth").mouseenter(function(){
        $(".sixb1").slideDown("slow");
        $(".sixb2").slideDown("slow");
        $(".sixh1").slideDown();
        $(".sixh2").slideDown();
        $(".sixthimg").slideDown("slow");
    });
});