let items = $('.animate');
const windowHeight = $(window).innerHeight();
const animationOffset = windowHeight - 60;

function addAnimationOnScroll() {
  const offsetDocumentTop = $(document).scrollTop();
  items.each(function (index) {
    const offsetItemTop = $(this).offset().top;
    if (offsetItemTop < offsetDocumentTop + animationOffset) {
      $(this).removeClass('animate');
      items = $('.animate');
      const classList = $(this)[0].classList;
      for (const className of classList) {
        if (className.includes('animate-')) {
          $(this).css('animation-name', className);
        }
      }
    }
  })
}

$(document).scroll(addAnimationOnScroll);
addAnimationOnScroll();