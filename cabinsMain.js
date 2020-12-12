$(document).ready(function (){

    //handle the tabs for the cabins page
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

    //setup the list of images to auto play when page is loaded. can be toggled with the checkbox under the images.
    var autorun;
    if($("#checkbox").is(":checked"))
    {
        autorun = setInterval(moveRight, 3000);
    }

    $('#checkbox').on("change", function(){
        if($("#checkbox").is(":checked"))
        {
            autorun = setInterval(moveRight, 3000);
        }
        else
        {
            clearInterval(autorun);
            autorun = '';
        }

    });

    //get basic info on the image sizes to be able to move between them.
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({ width: slideWidth, height: slideHeight });

    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    //move the current slide over the width of the next slide.
    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    //previous button to trigger moveLeft()
    $('a.control_prev').click(function () {
        moveLeft();
    });

    //previous button to trigger moveRight()
    $('a.control_next').click(function () {
        moveRight();
    });

});