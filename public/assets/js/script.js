// start
$(function() {
    $(".devourBtn").on("click", function(event) {
      let id = $(this).data("id");
      var newDevour = $(this).data(newDevour);
      console.log('newDevour:', newDevour)

      var newDevourStatus = {
          id,
            devoured: true
        };
      
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourStatus
      }).then(
        function() {
          console.log("Burger was devoured!", newDevour);
          location.reload();
        }
      );
    });
  
    $(".burgerAdd").on("submit", function(event) {
      event.preventDefault();
      console.log("click")
        
     const eaten = $('#eaten').is(":checked")
     console.log('eaten:', eaten)

      var newBurger = {
        name: $("#burgerName").val().trim(),
        devoured: $('#eaten').is(":checked")
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