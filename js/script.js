//jquery will run this function when all the elements on the page have loaded
$(function () {
  // look for the element with the id of first-form
  // run the parsley function on our form
  // check if our fields are validated
  $('#first-form').parsley().on('field:validated', function() {
    // declare a variable called OK if the parsley error
    // array is equal to 0
    var ok = $('.parsley-error').length === 0;
    // check the alert info class of hidden and toggle it
    // hide the info if ok doesn't exist
    $('.alert-info').toggleClass('hidden', !ok);
    // do the oppisite for the alert warning
    $('.alert-warning').toggleClass('hidden', ok);
  })
  // if everything is ok, then run this function
  .on('form:submit', function() {
    // prevent the page from refreshing
    event.preventDefault();
    alert("submitted succesfully");
  });
});

// Activity:
//
// - Style the button and the error message.
// - Check out the parsley examples and add in a <select> and a number input. Get them to validate.
