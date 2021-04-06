const galleryButtons = {
  'all-btn': 'all',
  'corporate-btn': 'corporate',
  'design-btn': 'design',
  'apps-btn': 'apps',
  'wordpress-btn': 'wordpress',
  'web-btn': 'web',
};

const windowWidth = $(window).innerWidth();
const itemsInRow = windowWidth > 768 ? 5 : 2;
const galleryItems = $('#gallery #gallery-items').children();
const itemsAmount = galleryItems.length;
const itemWidth = windowWidth / itemsInRow;
// const itemHeight = galleryItems.first().innerHeight();
const itemHeight = itemWidth;
const rowsNumber = Math.ceil(itemsAmount / itemsInRow)
$('#gallery #gallery-items').css('height', `${itemHeight * rowsNumber}px`)

// first location of photos
function locateAllPhotos() {
  galleryItems.each(function(galleryItemIndex) {
    const topOffset = Math.trunc(galleryItemIndex / itemsInRow);
    $(this).css({
      'width': `${itemWidth}px`,
      'height': `${itemHeight}px`,
      'top': `${itemHeight * topOffset}px`,
      'left': `${itemWidth * (galleryItemIndex % itemsInRow)}px`,
    })
  })
}

locateAllPhotos();

// add event listeners for all photos
function showAllPhotos(itemIndex) {
  const topOffset = Math.trunc(itemIndex / itemsInRow);
  $(this).css({
    'top': `${itemHeight * topOffset}px`,
    'left': `${itemWidth * (itemIndex % itemsInRow)}px`,
    'transform': 'scale(1)',
  })
  $('#gallery #gallery-items').css('height', `${itemHeight * rowsNumber}px`)
}

for (const btnName in galleryButtons) {
  const className = galleryButtons[btnName];
  $(`#gallery .gallery-filters .${btnName}`).click(function() {
    if (btnName === 'all-btn') {
      galleryItems.each(showAllPhotos);
    } else {
      let itemIndex = 0;
      galleryItems.each(function() {
        const classList = [...$(this)[0].classList];
        if (classList.includes(className)) {
          const topOffset = Math.trunc(itemIndex / itemsInRow);
          $(this).css({
            'top': `${itemHeight * topOffset}px`,
            'left': `${itemWidth * (itemIndex % itemsInRow)}px`,
            'transform': 'scale(1)',
          })
          $('#gallery #gallery-items').css('height', `${itemHeight * (topOffset + 1)}px`)
          itemIndex++;
        } else {
          $(this).css({
            'transform': 'scale(0)',
          });
        }
      })
    }
  })
}
