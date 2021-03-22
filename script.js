
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            console.log(this.scrollY,dateObject,"11111111111111111111");

            $('.navbar').addClass("sticky");
            
        }else{
            $('.navbar').removeClass("sticky");

        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");

        }
        else{
            $('.scroll-up-btn').removeClass("show");

        }
    })


    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    })

});

$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0})
})


var typed = new Typed(".typing",{
    strings:["Software engineer","Developer","Web Dev","Learner","Singer","Cricketer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})

var typed = new Typed(".typing-2",{
    strings:["Software engineer","Developer","Web Dev","Learner","Singer","Cricketer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})

var dateObj= new Date();

 var  dateObject=dateObj.getFullYear();
 var monthObject=dateObj.getMonth();
 const joinedMonth=6;

 var totalYears=dateObject-2018;

 if(monthObject==6){
     document.getElementById("exp").innerHTML= totalYears + " years";
 }

 else if(monthObject < 6){
    document.getElementById("exp").innerHTML=  (totalYears - 1) + " years " + ((12-6) + 1 + monthObject)  +" months" ;
 }


 else{
    document.getElementById("exp").innerHTML=  totalYears + " years " + (monthObject-6 + 1) + " months"
 }


// document.getElementById("#exp").innerHTML=NAMASTE

