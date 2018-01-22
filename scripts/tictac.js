var grid = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
]
var playerToken = "";
var winnerToken = "";
$(document).ready(function() {
  
  function isGameOver() {
    //check horizontal
    for (var n = 0; n < 3; n++) {
      if (grid[n][0] !== "" && grid[n][0] === grid[n][1] && grid[n][0] === grid[n][2]) {
        winnerToken = grid[n][0];
        //alert("Player " + winnerToken + " has Won");
        return true;
        
      }
      // check vertical
      else if (grid[0][n] !== "" && grid[0][n] == grid[1][n] && grid[0][n] === grid[2][n]) {
        winnerToken = grid[0][n];
        //alert("Player " + winnerToken + " has Won");
                return true;

      }
      else if(grid[0][0] !== "" && grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2]) {
        winnerToken = grid[0][0];
        //alert("Player " + winnerToken + " has Won");
                return true;

      }     
      else if(grid[0][2] !== "" && grid[0][2] === grid[1][1] && grid[0][2] === grid[2][0]) {
        winnerToken = grid[0][2];
       
     return true;

      } 
      else if (grid[0][0] !== "" && grid[0][1] !== "" && grid[0][2] !== "" && grid[1][0] !== "" && grid[1][1] !== "" && grid[1][2] !== "" && grid[2][0] !== "" && grid[2][1] !== "" && grid[2][2] !== "") {
        winnerToken = "Nobody"
               return true;
               }    
    }
    
    
  }
  
  
  
  
  function aiTurn() {
    var aiToken = "";
    if (playerToken === "X") {
      aiToken = "O";
    }
    else if (playerToken === "O"){
      aiToken = "X";
    }else{
      aiToken = "";
    }
    
    
          var aiMove = (Math.floor( (Math.random() * 9) )).toString();
    console.log(aiMove);
          //if (aiMove === 10) {
           // aiMove -= 1;
          //}else if (aiMove === 11) {
           // aiMove -= 2;
          //}
    
          if ($("#" + aiMove).text() !== "") {
          aiTurn();
            
          }else {
            $("#" + aiMove).html("<h1>" + aiToken + "</h1>");
            var i = $("#" + aiMove).data("i");
      var j = $("#" + aiMove).data("j");
      grid[i][j] = $("#" + aiMove).text();
          }
    
  }
  
  
  
  
  $("#X").on("click", function() {
    playerToken = this.id;
   
  });
  $("#O").on("click", function() {
    playerToken = this.id;
  
  });
  $("#reset").on("click", function() {
    $(".board").html("<h1></h1>")
    playerToken = ""
    grid = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]
    $("#X, #O").show();
  });
  $(".board").on("click", function() {
    if (this.text === "X" || this.text === "O") {
      console.log("place already taken")
    }else{
    $(this).html("<h1>" + playerToken + "</h1>")
      var i = $(this).data("i");
      var j = $(this).data("j");
      grid[i][j] = this.text;
      if (isGameOver() === true) {
        
        alert(winnerToken + " has Won");
        $("#reset").click();
      }else{
        aiTurn();
        if (isGameOver() === true) {
        
        alert(winnerToken + " has Won");
          $("#reset").click();
      }
      }
  }
    
  });
});
