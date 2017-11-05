function loadTwitter() {
  $.ajax({
    url: '//socialtrackr.herokuapp.com/search/_myfashionhub',
    dataType: 'json',
    success: displayTweets
  });
}


function displayTweets(data) {
  for (var i = 0; i < 5; i++) {
    var tweet = $('<span>').html(data[i]['content']);
    tweet.appendTo('.tweets').hide();
  }

  var tweets     = $('.tweets').children();
  var firstTweet = tweets.first();
  firstTweet.addClass('current').fadeIn();

  setInterval(function() {
    var currentIdx = $('.tweets').find('.current').index();
    tweets.eq(currentIdx).removeClass('current').fadeOut(500, function() {

      if (currentIdx + 1 === tweets.length) { currentIdx = -1 }
      tweets.eq(currentIdx + 1).addClass('current').fadeIn();
    });
  }, 3500);
}


function iconHover() {
  var socialLis = $('.contact').children();

  var hoverState = function() {
    $(this).animate({
      'top' : '-6px',
      'backgroundColor': 'rgba(255,155,77,0.8)'});
  };

  var normalState = function() {
     $(this).animate({
       'top' : '0',
       'backgroundColor': 'transparent'});
   };

  for (var i = 0; i < socialLis.length; i++) {
    $(socialLis[i]).mouseenter(hoverState);
    $(socialLis[i]).mouseout(normalState);
  }
}
