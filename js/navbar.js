// navbar-collapse
const navItems = $('nav.navbar ul.nav-items').children().clone();
$('nav.navbar .navbar-collapse-items').append(navItems);

$('nav.navbar .navbar-collapse').click(function() {
  $('nav.navbar .navbar-collapse-items').toggleClass('unactive');
})

// navbar scroll activate items
const sections = $('section');
let currentActiveSection;

function activateSection() {
  const preOffset = 100;
  const currentOffset = $(document).scrollTop() + preOffset;
  sections.each(function() {
    const sectionOffset = $(this).offset().top;
    const sectionHeight = $(this).innerHeight();
    const sectionBottom = sectionOffset + sectionHeight;
    const sectionInView = 
      sectionOffset < currentOffset && currentOffset < sectionBottom;
    const currentSectionId = $(this).attr('id');

    if (sectionInView && currentActiveSection !== currentSectionId) {
      currentActiveSection = currentSectionId;
      $('nav.navbar a').removeClass('active');
      $(`nav.navbar a[href="#${currentSectionId}"]`).addClass('active');
    }
  })
}

activateSection();
$(window).scroll(activateSection);
