
// Pull in the necessary field inputs from new member mailing list form...
const fnameInput = $("#mailing-list-fname");
const lnameInput = $("#mailing-list-lname");
const emailInput = $("#mailing-list-email");
const mailingBtn = $("#mailing-list-button");

// Handle any view form functionality here...
mailingBtn.on("click", function(event) {
  event.preventDefault();

  const trimFNAME = fnameInput.val().trim();
  const trimLNAME = lnameInput.val().trim();
  const trimEMAIL = emailInput.val().trim();

  if (!trimFNAME || !trimLNAME || !trimEMAIL) {
    // Need to use error.handlebars here...
    return;

  } else {
    // Maybe a message like "Now sending new member information to Mailchimp"

    const newMemberObject = {
      FirstName: trimFNAME,
      LastName: trimLNAME,
      EmailAddress: trimEMAIL
    } 

    console.log(newMemberObject);

    $.ajax({
      type: "POST",
      url: "/mailinglist/sendnew",
      data: newMemberObject,

    }).done(function() {
      console.log("Complete");
    })  
  }
})