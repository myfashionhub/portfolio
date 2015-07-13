$(window).load(currentTab);

$(document).ready(function() {
  loadTwitter();
  $('.menu a').click(menuNav);
  $('.experience sup').click(showJobDesc);
  iconHover();
});
