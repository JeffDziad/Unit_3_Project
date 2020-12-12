$(document).ready(function (){

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

        $("#confirmed_output").html(`You're reservation is being looked over as we speak! Please feel free to print this page out for future notice!\n<ul><li>Reservation ID: ${id}</li><li>Name: ${name}</li><li>Email: ${email}</li><li>Your reservation begins on ${start} and ends on ${end}</li><li>You selected the ${cabin} Cabin</li></ul>`);

        if(pet === 'true')
        {
            $("#petDocument").css("display", "block");
        }
    }
});