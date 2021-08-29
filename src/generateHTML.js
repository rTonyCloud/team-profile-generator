<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Company's Team!</title>
  <!-- Latest compiled and minified CSS & JS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="https://code.jquery.com/jquery.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

</head>

<body>

  <div class="container">
    <div class="jumbotron">
      
    </div>
    <div class="row">

      <div class="col-12">

        <div class="card">
          <div class="card-header">
            <h3><strong>My Team</strong></h3>
          </div>
          <div class="card-body">
            <h2 id="name"></h2>
            <div id="stats">
              <h3><strong>ID:</strong> <span id="idNumber"></span></h3>
              <h3><strong>Email:</strong> <span id="email"></span></h3>
              <h3><strong>Force Points:</strong> <span id=""></span></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script type="text/javascript">
    $("#search-btn").on("click", function () {
      let searchedCharacter = $("#character-search").val().trim();

      // Using a RegEx Pattern to remove spaces from searchedCharacter
      // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
      searchedCharacter = searchedCharacter.replace(/\s+/g, "").toLowerCase();

      $.get("/api/characters/" + searchedCharacter, function (data) {
        console.log(data);
        if (data) {
          $("#stats").show();
          $("#name").text(data.name);
          $("#role").text(data.role);
          $("#id").text(data.id);
          $("#email").text(data.forcePoints);
        } else {
          $("#name").text(
            "The force is not strong with this one. Your character was not found.");
          $("#stats").hide();
        }cd //
      });
    });

  </script>
</body>

</html>