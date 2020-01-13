
//The Validity check is triggered with the form submit button

$("form").submit(function(event) {

    // prevent the default behaviour on submit
    event.preventDefault();

    // for all input chech validity
    $("input").each(function() {

        var id = $(this).attr("id");
        var label = $(this).attr("placeholder");

        var result = isValid( id );

        if ( result === false ) {

            setError( id, label, $(this));
        
        } else {

            setValid( id, label, $(this));
        }
    });
});

//reset the input styles on focus
$("input").focus(function(){
    $(this).css("border", "");
    $(this).removeClass("icon-err");
  });


/************************************  FUNCTIONS  */ 

// Set the input styles as ERROR
function setError( id, label, thisInput ) {
    document.getElementById(id + "-msg").innerHTML = label + " cannot be empty";
    $(thisInput).addClass("icon-err");
    $(thisInput).css("border", "2px solid hsl(0, 100%, 74%)");
}

// Set the input styles and VALID
function setValid( id, label, thisInput) {
    // if the validity is passed tag the input as valid 
    document.getElementById(id + "-msg").innerHTML = "";
    $(thisInput).css("border", "2px solid hsl(154, 59%, 51%)");
    $(thisInput).attr("is_valid", "");
}

// Using the HTML5 Validity function and return the valid property
function isValid(label) {
    inpObj = document.getElementById(label);
    inpObj.checkValidity(); 
    return inpObj.validity.valid; 
}

