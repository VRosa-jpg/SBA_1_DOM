
    let items = document.getElementsByClassName("carousel__photo");
    let totalItems = items.length;
    let slide = 0;
    let moving = true;


// Set classes

function setInitialClasses() {
    // Targets the previous, current, and next items
    // Assuming 3 itmes

    items[totalItems - 1].classList.add("prev");
    items[0].classList.add("active");
    items[1].classList.add("next");
}

// Set event listeners

function setEventListeners() {
    let next = doc.getElementsByClassName('carousel__button--next')[0];
    let prev = doc.getElementsByClassName('carousel__button--prev')[0];

    next.addEventListener('click', moveNext);
    prev.addEventListener('click', movePrev);
}

// Next Navigation Handler
function moveNext() {

    // Check if moving
    if (!moving) {
        if (slide === (totalItems - 1)) {
            slide = 0;
        } else {
            slide++;
        }

        // Move carousel to updated slide
        moveCarouselTo(slide);
    }
}

function movePrev() {
    if (!moving) {
        if (slide === 0) {
            slide + (totalItems - 1);
        } else {
            slide--;
        }

        moveCarouselTo(slide);
    }
}

function disableInteraction() {
    moving = true;

    setTimeout() {
        moving = false
    }
}

function moveCarouselTo(slide) {

    if(!moving) {
        disableInteraction();

        let newPrevious = slide - 1;
        let newNext = slide + 1;
        let oldPrevious = slide - 2;
        let oldNext = slide + 2;

        // Test if carousel has more than three items
        if ((totalItems - 1) > 3) {
            if (newPrevious <= 0) {
                oldPrevious = (totalItems - 1);
            } else if (newNext >= (totalItems - 1)) {
                oldNext = 0;
            }

        if (slide === 0) {
            newPrevious = (totalItems - 1);
            oldPrevious = (totalItems -2);
            oldNext = (slide + 1);
        } else if (slide === (totalItems - 1)) {
            newPrevious = (slide - 1);
            newNext = 0;
            oldNext = 0;
        }

        items[newPrevious].className = itemClassName + "prev";
        items[slide].className = itemClassName + "active";
        items[newNext].className = itemClassName + "next";
        }
    }

}



// Calling functions


setInitialClasses();
setEventListeners();

moving = false;


initCarousel();