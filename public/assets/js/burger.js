$(function() {
    $(".change-status").on("click", function(event) {
      const id = $(this).data("id");
      const newlyDevoured = $(this).data("newlydevoured");
  
      const newStatus = {
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
  
      const newBurger = {
        burger_name: $("#ca").val().trim(), 
        devoured: $("[burger_name=devoured]:checked").val().trim()
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
  