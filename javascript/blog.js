$(function() {
  showPosts();
  $('nav .posts a').click(expandPost);

  setTimeout(function() {
    $('.post-content button').click(function(e) {
      toggleFullText($(e.target).parent().parent());
    });
  }, 300);
});


function showPosts() {
  var posts = $('.posts a');
  for (var i = 0; i < posts.length; i++) {
    var link = $(posts[i]).attr('href');
    var postContent = $('<li>').load(link);
    $('.post-content').append(postContent);
  }
}

function toggleFullText(post) {
  post.find('.full-text').toggle('blind');
  post.find('.more').toggleClass('active');
  post.find('.less').toggleClass('active');
}

function expandPost(e) {
  e.preventDefault();
  var postTitle = e.target;
  var index = $('nav .posts a').index(postTitle);
  toggleFullText($($('.post-content li')[index]));
}
