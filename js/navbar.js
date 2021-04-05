// navbar-collapse

const navItems = $('nav.navbar ul.nav-items').children().clone();
$('nav.navbar .navbar-collapse-items').append(navItems);

$('nav.navbar .navbar-collapse').click(function() {
  $('nav.navbar .navbar-collapse-items').toggleClass('unactive');
})