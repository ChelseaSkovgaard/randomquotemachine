$('#get-another-quote-button').on('click', function() {
  randomQuote();
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
