
let counter = 0;

function change() {
      let images = Array.from(document.getElementsByClassName('carousel__photo'));
      let currentPhoto = images[counter];
      console.log(counter)
      // Length does not account for index, it accounts for amount of items in an array
      if (counter < images.length - 1) {
        counter++;
      } else {
        counter = 0;
        currentPhoto.classList.remove('initial')
      }

      images[counter].classList.add('initial')
      currentPhoto.classList.remove('initial')

      
    
    }