$('#get-another-quote-button').on('click', function() {
  randomQuote();
  randomColor();
});

  function randomQuote() {
  $.ajax({
      url: "http://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $(".quote-text").html(response.quoteText)
        $(".quote-author").html(response.quoteAuthor);
}
})
};


var min = 1;
var max= 255;

function getRandomNumber() {
  return Math.floor( Math.random() * max) + min;
}

function randomColor() {
  var numberone = getRandomNumber();
  var numbertwo = getRandomNumber();
  var numberthree =getRandomNumber();
  var randomColor = 'rgb('+ numberone + ',' + numbertwo + ',' + numberthree +')';
  $('body').css("background-color", randomColor);
  $('.color').css("color", randomColor);
};
