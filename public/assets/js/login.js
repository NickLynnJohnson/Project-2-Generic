$(document).ready(function() {
  // Applies to login button on navbar modal or homepage button

  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var usernameInput = $("input#username-input");
  var passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.username) {
      usernameInput.css("border", "solid 1px red");
      $("#username-feedback").text("Please enter a username");
      return;
    }

    if (!userData.password) {
      passwordInput.css("border", "solid 1px red");
      $("#password-feedback").text("Please enter a password");
      return;
    }


    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.username, userData.password);
    usernameInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(username, password) {
    $.post("/users/login", {
      username: username,
      password: password
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function(err) {
      $("#password-feedback").text("Incorrect Username or Password");
    });
  }

});
