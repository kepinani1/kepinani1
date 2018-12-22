// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".update-amount").on("click", function(event) {
    var id = $(this).data("id");
    var newAmount = $(this).data("amount");

    var newAmountState = {
      amount: amount
    };

    // Send the PUT request.
    $.ajax("/api/budget/" + id, {
      type: "PUT",
      data: newAmountState
    }).then(
      function() {
        console.log("changed amount to", newAmount);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    
    var newLine = {
      name: $("#ca").val() || '',
      amount: $("#amount").val() || '',
      expense: $("[name=expense]:checked").val() || ''
    };
    // Send the POST request.
    $.ajax("/api/budget", {
      type: "POST",
      data: newLine
    }).then(
      function() {
        console.log("created new line");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-expense").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/budget/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted line", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});