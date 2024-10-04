
let counter = 0;

function change() {

    // images to change
      let images = Array.from(document.getElementsByClassName('carousel__photo'));

      let currentPhoto = images[counter];

    //   console.log(counter)
      // Length does not account for index, it accounts for amount of items in an array
      if (counter < images.length - 1) {
        counter++;
      } else {
        counter = 0;
        currentPhoto.classList.remove('initial')
      }

      images[counter].classList.add('initial')
      currentPhoto.classList.remove('initial')



    //   text for each image

      let text = Array.from(document.getElementsByClassName('futureProjects'));

      let currentObject= text[counter];

        if (counter < text.length - 1) {
            counter++;

        } else {
            counter = 0;
            currentObject.classList.remove('initialText');
        }

        text[counter].classList.add('initialText');
        currentObject.classList.remove('initialText');

    
}

    