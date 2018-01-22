currentQuote = "";
currentAuthor = "";
$("#quote-display").css("background-color", "black");
  $("#quote-display").css("color", "red");

$("#getQuote").on("click", function() {

  $.ajaxSetup ({cache:false});
$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback=", function(a) {
    
  $("#quote-display").html(a[0].content + "<h6>&mdash; " + a[0].title + "</h6>");
  $('#rqtweetit').click(function() {
    $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + a[0].content + " -- " + a[0].title);
  });

    });
  });


