$(document).ready(function(){ //wait for all elements to load on page
  $('#submit-btn').click(function(event){ //when the submit button is clicked, run the following function
    event.preventDefault(); //prevent default action when submit button is clicked

    var city = $('#city-type').val(); //get value of user's input, save as city variable
    city = city.toLowerCase(); //convert user input to lowercase

    // if the user inputs New York change the CSS class to 'nyc'
    if (city == "new york city" || city == "nyc" || city == "new york") {
      $('body').attr('class','nyc');
    }
    // if the user inputs San Francisco change CSS class to 'sf'
    else if (city == 'sf' || city == 'san francisco' || city == 'bay area') {
      $('body').attr('class','sf');
    }
     // if the user inputs Austin/ATX change the CSS class to 'austin'
    else if (city == 'austin' || city == 'atx') {
      $('body').attr('class','austin');
    }
    // if the user inputs Los Angeles/LA/LAX change the CSS class to 'la'
    else if (city == 'los angeles' || city == 'la' || city == 'lax') {
      $('body').attr('class','la');
    }
    // if the user inputs Sydney/SYD change the CSS class to 'sydney'
    else if (city == 'sydney' || city == 'syd') {
      $('body').attr('class','sydney');
    }
  });
});