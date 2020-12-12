$(document).ready(function (){

    $("#print_Reservation").click(function(){
       window.print();
    });

    //once rentalMain.js passes the page over to confirmation.html, immediately run handleConfirmation to re-parse the cookie back into variables
    handleConfirmation();

    function handleConfirmation()
    {
        var name = Cookies.get("fullName");
        var email = Cookies.get("email");
        var start = Cookies.get("sDate");
        var end = Cookies.get("eDate");
        var cabin = Cookies.get("cabin");
        var pet = Cookies.get("pet");

        var id = Math.floor((Math.random() * 1000000000) + 1);

        //output the information the user game on the rental page
        $("#confirmed_output").html(`You're reservation is being looked over as we speak! Please feel free to print this page out for future notice!\n<ul><li>Reservation ID: ${id}</li><li>Name: ${name}</li><li>Email: ${email}</li><li>Your reservation begins on ${start} and ends on ${end}</li><li>You selected the ${cabin} Cabin</li><li>Keep an eye out for an email from us regarding finalizing your stay!</li></ul>`);

        //if the user specified they would have a pet, display the petDocument div.
        if(pet === true || pet === 'true')
        {
            $("#petDocument").css("display", "block");
        }
        else
        {
            $("#petDocument").css("display", "none");
        }
    }
});