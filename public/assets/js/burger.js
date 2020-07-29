$(function () {
  $(".devour").on("click", function (event) {
    var id = $(this).data("id");
    var newburger = $(this).data("devour");

    var newdevour = {
      devour: false
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newdevour
    }).then(function () {
      console.log("devoured", newdevour);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newburger = {
      name: $("#ca").val().trim(),
      burger: $("[name=devour]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: burger
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
