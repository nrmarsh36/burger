$(function() {
    $(".devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newlyDevoured = $(this).data("newlydevoured");
  
      var newStatus = {
        devoured: newlyDevoured
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newStatus
      }).then(
        function() {
          console.log("changed status to", newlyDevoured);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        status: $("[name=devoured]:checked").val().trim()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  });
  