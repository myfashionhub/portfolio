function MainNav() {
  this.init = function () {

    this.currentTab();
    this.showDropdownMenu();
    $('.menu a').click((e) => {
      var link = $(e.target);
      var sectionName = link.attr('id').replace('menu-','');

      this.toggleMenuItem(link);
      this.menuItemSelected(sectionName);
    });

    loadTwitter();
    // Icon bounce effect
    iconHover();
  };

  this.menuItemSelected = function (sectionName) {
    var randomIndex = Math.round(Math.random());
    var effect = ['drop', 'clip'][randomIndex];

    $('main').empty();
    $(`.${sectionName.replace('menu-','')}`)
      .clone()
      .appendTo($('main'))
      .hide()
      .toggle(effect);
  };

  this.toggleMenuItem = function (clickedItem) {
    $('.current').removeClass('current');
    clickedItem.addClass('current');
  };

  this.currentTab = function () {
    var sectionName = location.hash.replace('#','');
    if (!sectionName) sectionName = 'about';

    $('#menu-'+sectionName).addClass('current');
    this.menuItemSelected(sectionName);
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
