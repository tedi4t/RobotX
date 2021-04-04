// GALLERY-CAROUSEL
let slideNow = 1;
const slides = $('#slidewrapper').children();
const slideCount = $('#slidewrapper').children().length;
const viewportWidth = $('#carousel').width();
const third = 100 / 3;

$('#slidewrapper').children().remove();
$('#slidewrapper').css('width', `${viewportWidth * 3}px`);

$('#slidewrapper').append($(slides[(slideCount - 1) % slideCount]).attr('id', 'prev').css('margin-left', `-${third}%`));
$('#slidewrapper').append($(slides[(slideNow - 1) % slideCount]).attr('id', 'active').css('margin-left', '0%'));
$('#slidewrapper').append($(slides[(slideNow) % slideCount]).attr('id', 'next').css('margin-left', `0%`));

function nextSlide() {
  $('#slidewrapper #prev').remove();
  $('#slidewrapper #active').attr('id', 'prev').css('margin-left', `-${third}%`);
  $('#slidewrapper #next').attr('id', 'active').css('margin-left', '0%');
  slideNow++;
  $('#slidewrapper').append($(slides[(slideNow) % slideCount]).attr('id', 'next').css('margin-left', `0%`));
  $('#carousel-indicators').children().removeClass('active');
  const indicatorNumber = ( slideNow - 1 ) % slideCount + 1;
  $(`#carousel-indicators li:nth-child(${indicatorNumber})`).addClass('active');
}

// function prevSlide() {
//   $('#slidewrapper #next').remove();
//   $('#slidewrapper #active').attr('id', 'next').css('margin-left', `0%`);
//   $('#slidewrapper #prev').attr('id', 'active').css('margin-left', '0%');
//   slideNow = slideNow === 1 ? slideCount : slideNow - 1;
//   const prevID = slideNow === 1 ? 3 : (slideNow - 2) % slideCount;
//   $('#slidewrapper').prepend($(slides[prevID]).attr('id', 'prev').css('margin-left', `-${third}%`));
// }

setInterval(nextSlide, 10000);