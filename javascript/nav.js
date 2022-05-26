function MainNav() {
  this.init = function () {

    this.currentTab();
    this.showDropdownMenu();
    $('.menu a').click((e) => this.menuItemSelected(e));

    loadTwitter();
    // Icon bounce effect
    iconHover();
  };

  this.menuItemSelected = function (e) {
    var link = $(e.target);
    var sectionName = link.attr('id').replace('menu-','');

    $('main').children().slideUp().appendTo($('.hidden'));
    this.toggleMenuItem(link);

    var randomIndex = Math.round(Math.random());
    var effect = ['drop', 'clip'][randomIndex];
    $(`.${sectionName.replace('menu-','')}`).
      appendTo($('main')).hide().toggle(effect);
  };

  this.toggleMenuItem = function (clickedItem) {
    $('.current').removeClass('current');
    clickedItem.addClass('current');
  };

  this.currentTab = function () {
    if (location.hash === '') {
      $('#menu-about').addClass('current');
      $('.about').appendTo($('main')).hide().fadeIn('slow');
    } else {
      var sectionName = location.hash.replace('#','');
      $('#menu-'+sectionName).addClass('current');
      $('.'+sectionName).appendTo($('main')).hide().fadeIn('slow');
    }
  };

  this.showDropdownMenu = function () {
    $('a#menu-travel').on({
      mouseenter: function () {
        $('.dropdown-menu').removeClass('hidden');
      },
      mouseleave: function (e) {
        const target = e.target;
        if (target.id !== 'menu-travel') {
          $('.dropdown-menu').addClass('hidden');
        }
      },
    });

    $('.dropdown-menu').on({
      mouseleave: function () {
        $('.dropdown-menu').addClass('hidden');
      },
      click: function () {
        $('.dropdown-menu').addClass('hidden');
      },
    });
  };
}

$(document).ready(function() {
  const nav = new MainNav();
  nav.init();
});
