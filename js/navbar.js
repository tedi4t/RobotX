// navbar-collapse
const navItems = $('nav.navbar ul.nav-items').children().clone();
$('nav.navbar .navbar-collapse-items').append(navItems);

$('nav.navbar .navbar-collapse').click(function() {
  $('nav.navbar .navbar-collapse-items').toggleClass('unactive');
})

// coef of covering for activating last section
const lastSectionKoef = 8 / 10;

// navbar scroll activate items
const sections = $('section');
let currentActiveSection;

function activateSection(sectionId) {
  currentActiveSection = sectionId;
  $('nav.navbar a').removeClass('active');
  $(`nav.navbar a[href="#${sectionId}"]`).addClass('active');
}

function activateSectionOnScroll() {
  const preOffset = 100;
  const currentOffset = $(document).scrollTop() + preOffset;
  
  //check last section at first
  const lastSection = sections.last();
  const lastSectionOffsetTop = lastSection.offset().top;
  const lastSectionHeight = lastSection.innerHeight();
  const windowHeight = $(window).innerHeight();
  const lastSectionId = lastSection.attr('id');
  
  const lastSectionTooSmall = lastSectionHeight < windowHeight;
  const lastSectionInView = lastSectionOffsetTop < currentOffset + windowHeight - lastSectionHeight * lastSectionKoef;
  
  if (lastSectionTooSmall && lastSectionInView) {
    activateSection(lastSectionId);
  } else {
    sections.each(function() {
      const sectionOffset = $(this).offset().top;
      const sectionHeight = $(this).innerHeight();
      const sectionBottom = sectionOffset + sectionHeight;
      const sectionInView = 
        sectionOffset < currentOffset && currentOffset < sectionBottom;

      const currentSectionId = $(this).attr('id');

      if (sectionInView && currentActiveSection !== currentSectionId) {
        activateSection(currentSectionId);
      }
    })
  }
}

activateSectionOnScroll();
$(window).scroll(activateSectionOnScroll);

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