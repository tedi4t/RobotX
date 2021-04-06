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

const navHeight = $('nav.navbar').innerHeight();

function scrollToSection() {
  const href = $(this).attr('href');
  const sectionScrollTop = $(`section${href}`).offset().top;
  const targetOffsetTop = sectionScrollTop - navHeight + 5;

  $('html').animate({
    scrollTop: targetOffsetTop
  }, 500);
}

$('nav.navbar a').click(scrollToSection);