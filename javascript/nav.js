function menuNav(e) {
  var link = $(e.target);
  var sectionName = link.attr('id').replace('menu-','');

  $('main').children().slideUp().appendTo($('.hidden'));
  toggleMenuItem(link);

  var effect = _.sample(['drop', 'clip']);
  $('.'+sectionName.replace('menu-','')).
    appendTo($('main')).hide().toggle(effect);
}


function toggleMenuItem(clickedItem) {
  $('.current').removeClass('current');
  clickedItem.addClass('current');
}


function currentTab() {
  if (location.hash === '') {
    $('#menu-about').addClass('current');
    $('.about').appendTo($('main')).hide().fadeIn('slow');
  } else {
    var sectionName = location.hash.replace('#','');
    $('#menu-'+sectionName).addClass('current');
    $('.'+sectionName).appendTo($('main')).hide().fadeIn('slow');
  }
}
