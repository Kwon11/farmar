const images = document.querySelectorAll('.carousel-item');
// const SelectedImage = document.querySelector('.SelectedImage');
// const ImageLink = document.querySelector('.ItemImageLink');
const thumbnails = document.querySelectorAll('.ThumbnailImages');
const prev = document.querySelector('.carousel-control-prev');
const next = document.querySelector('.carousel-control-next');

let imageIndex = 0;
const length = images.length;

function hasActive() {
  for (var i = 0; i < images.length; i++) {
    if (images[0].classList.contains('active')) {
      return true;
    }
  }
  return false;
}

if (!hasActive()) {
  images[0].classList.add('active');
}

function handleImageNext() {
  for (var i = 0; i < length; i++) {
    if (images[i].classList.contains('active')) {
      images[i].classList.remove('active');
    }
  }
  imageIndex < length - 1 ? imageIndex++ : (imageIndex = 0);
  images[imageIndex].classList.add('active');
}
function handleImagePrev() {
  for (var i = 0; i < length; i++) {
    if (images[i].classList.contains('active')) {
      images[i].classList.remove('active');
    }
  }
  imageIndex > 0 ? imageIndex-- : (imageIndex = length - 1);
  images[imageIndex].classList.add('active');
}

prev.addEventListener('click', handleImagePrev);
next.addEventListener('click', handleImageNext);

function handleImageClick() {
  console.dir(this);
  for (var i = 0; i < images.length; i++) {
    if (images[i].classList.contains('active')) {
      images[i].classList.remove('active');
    }

    if (images[i].children[0].src === this.src) {
      images[i].classList.add('active');
    }
  }
}

thumbnails.forEach(function(ele) {
  ele.addEventListener('click', handleImageClick);
});

