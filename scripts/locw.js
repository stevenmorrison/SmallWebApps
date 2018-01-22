$(document).ready(function() {
    var API_KEY = ""; // API key here
    var cel = false;
    var data;
    
    function tempDisp(fTemp, c) {
      if (c) return Math.round((fTemp - 32) * (5 / 9)) + " C";
      return Math.round(fTemp) + " F";
    }
    function renderData(data, cel) {
      var currentW = data.weather[0].description;
      var temp = tempDisp(data.main.temp, cel);
      var high = tempDisp(data.main.temp_max, cel);
      var low = tempDisp(data.main.temp_min, cel);
      var windSpeed = data.wind.speed;
      var city = data.name;
      var country = data.sys.country;
      var icon = data.weather[0].icon;
      var iconSrc = "http://openweathermap.org/img/w/" + icon + ".png";
      $("#city").html(city + ", " + country);
      $("#temp").html(temp);
      $("#currentW").html(currentW);
      $("#high-low").html("High: " + high + "  -- Low: " + low);
      $("#currentW").prepend("<img src=" + iconSrc + "></img>");
    }
    
    $(function() {
      var loc;
      $.getJSON("https://ipinfo.io", function(d) {
        loc = d.loc.split(",");
        //console.log(loc)
        //Call to the weather api
        $.getJSON(
          "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=" +
            loc[0] +
            "&lon=" +
            loc[1] +
            "&APPID=" +
            API_KEY,
          function(apiData) {
            data = apiData;
            renderData(apiData, cel);
            $("#toggle").click(function() {
              cel = !cel;
              renderData(apiData, cel);
            });
          }
        );
      });
    });
    
});
