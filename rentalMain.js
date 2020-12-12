$(document).ready(function (){

    var myRules =
        {
            fullName:
                {
                    required: true
                },
            email:
                {
                    required: true,
                    email: true
                },
            dob:
                {
                    required: true,
                    date: true
                },
            numOcc:
                {
                    required: true,
                    max: 10
                },
            sDate:
                {
                    required: true,
                    date: true
                },
            eDate:
                {
                    required: true,
                    date: true
                }
        }

    var myMessages =
        {
            fullName:
                {
                    required: "This field is required."
                },
            email:
                {
                    required: "This field is required.",
                    email: "Please enter a valid email."
                },
            dob:
                {
                    required: "This field is required.",
                    date: "Please enter a valid date."
                },
            numOcc:
                {
                    required: "This field is required.",
                    max: "A maximum of 10 occupants is allowed."
                },
            sDate:
                {
                    required: "This field if required.",
                    date: "Please enter a valid date."
                },
            eDate:
                {
                    required: "This field is required.",
                    date: "Please enter a valid date."
                }
        }

    $("form[name='rental_form']").validate(
        {
            submitHandler: packContents,
            rules: myRules,
            messages: myMessages
        }
    );

    $("#output").text(`Reservation Receipt:\n\n--General Info--\nFullName:\nEmail:\nDate of Birth:\nNumber of Occupants:\nStart Date:\nEnd Date:\nCabin Choice:\nPets:\nBoat Rental:\n\nTotal: $`);

    $("#confirmation_button").click(function (){
        window.location.href = 'confirmed.html';
    });

    $(".outputCheck").change(function(){
        var fullName = $("#fullName").val();
        var email = $("#email").val();
        var dob = $("#dob").val();
        var occupants = $("#occupants").val();
        var sDate = $("#startDate").val();
        var eDate = $("#endDate").val();
        var cabinChoice = $("#cabins").val();
        var pets = $("input:radio[name='petRadio']:checked").val();
        var boats = $("input:radio[name='boatRadio']:checked").val();

        var total = 0;

        if(pets === 'Yes ($50 fee)')
        {
            total = total + 50;
        }
        if(boats === 'Yes ($100 per day)')
        {
            total = total + checkDate(sDate, eDate, 100);
        }

        total = total + checkDate(sDate, eDate, 175);

        $("#output").text(`Reservation Receipt:\n\n--General Info--\nFullName: ${fullName}\nEmail: ${email}\nDate of Birth: ${dob}\nNumber of Occupants: ${occupants}\nStart Date: ${sDate}\nEnd Date: ${eDate}\nCabin Choice: ${cabinChoice}\nPets: ${pets}\nBoat Rental: ${boats}\n\nTotal: $${total}`);

    });

    function checkDate(start, end, amount)
    {
        var startDate = moment(start);
        var endDate = moment(end);

        var dateDiff = endDate.diff(startDate, 'days');
        var output = dateDiff * amount;
        if(isNaN(output))
        {
            return 0;
        }
        else if(Math.sign(output) === 1 || Math.sign(output) === 0)
        {
            return output;
        }
    }

    function packContents()
    {
        //e.preventDefault();
        var pets = $("input:radio[name='petRadio']:checked").val();
        var userInfo = {
            name: $("#fullName").val(),
            email: $("#email").val(),
            sDate: $("#startDate").val(),
            eDate: $("#endDate").val(),
            cabin: $("#cabins").val()
        };

        if(pets === 'Yes ($50 fee)')
        {
            userInfo.pet = true;
        }
        else
        {
            userInfo.pet = false;
        }

        Cookies.set("fullName", userInfo.name);
        Cookies.set("email", userInfo.email);
        Cookies.set("sDate", userInfo.sDate);
        Cookies.set("eDate", userInfo.eDate);
        Cookies.set("cabin", userInfo.cabin);
        Cookies.set("pet", userInfo.pet);

        $("#myModal").css("display", "block");
    }


});