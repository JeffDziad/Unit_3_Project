$(document).ready(function()
{

    //index.html animations
    var textWrapper = document.querySelector('.ml3');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    //loop through letters in 'North Woods Experience'
    anime.timeline({loop: false})
        .add({
            targets: '.ml3 .letter',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 150 * (i+1)
        });

    $("#logo").animate({
      opacity: "1",
      top: "50px"
    },3000);
    $("#navMenu").animate({
        opacity: "1"
    },3000);
    $("#footer").animate({
        opacity: "1",
        bottom: "0"
    }, 3000);
    $(".logoBorder").animate({
        opacity: "1",
        width: "700px"
    }, 5000);
    $("#logoCaption").animate({
        opacity: "1"
    }, 2000);

});
