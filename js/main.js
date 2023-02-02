function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      // reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener('scroll', reveal);

// karuzela
function startCarousel(carousel, carouselObj) {
  setInterval(function () {
    //runs carousel
    carousel.find('.panel').each(function () {
      $(this).css('left', '-=0.5');
    });
  }, carouselObj.speed);

  setInterval(function () {
    if (
      carousel.find('.panel:first').position().left * -1 >=
      carousel.find('.panel:first').width()
    ) {
      carousel.append(carousel.find('.panel').eq(1).clone());
      carousel.find('.panel:last').css('left', 'calc(100% - 3px)');
      carousel.find('.panel:first').remove();
    }
  }, 1);
}

function createCarousel(carousel, container) {
  $(container).append('<div class="carousel"></div>');
  var currentCarousel = $(container).find('.carousel:last');
  for (var i = 0; i <= Object.keys(carousel.images).length; i++) {
    $(currentCarousel).append(carousel.panel);
    if (i == Object.keys(carousel.images).length)
      currentCarousel
        .find('.panel')
        .eq(i)
        .css({
          'background-image': 'url("' + carousel.images[0] + '")',
          width: 100 / Object.keys(carousel.images).length + '%',
          left: 'calc(100% - 1px)',
        });
    else
      currentCarousel
        .find('.panel')
        .eq(i)
        .css({
          'background-image': 'url("' + carousel.images[i] + '")',
          width: 100 / Object.keys(carousel.images).length + '%',
          left: i * (100 / Object.keys(carousel.images).length) + '%',
        });
  }
  startCarousel(currentCarousel, carousel);
}

function Carousel(speed, images) {
  return { speed: speed, images: images, panel: '<div class="panel"></div>' };
}

$(document).ready(function () {
  var speed = 15,
    imageArray = [
      'http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg',
      'http://www.catster.com/wp-content/uploads/2017/06/small-kitten-meowing.jpg',
      'https://d4n5pyzr6ibrc.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/4785B1C2-8734-405D-96DC23A6A32F256B/thul-90efb785-97af-5e51-94cf-503fc81b6940.jpg?response-content-disposition=inline',
      'https://www.pets4homes.co.uk/images/articles/771/large/cat-lifespan-the-life-expectancy-of-cats-568e40723c336.jpg',
      'http://www.petmd.com/sites/default/files/petmd-cat-happy-13.jpg',
    ];
  createCarousel(Carousel(speed, imageArray), '#conTest');
});
