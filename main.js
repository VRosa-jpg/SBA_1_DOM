

let counter = 0;

function change() {
    // images to change
    let images = Array.from(document.getElementsByClassName('carousel__photo'));

    // Current photo
    let currentPhoto = images[counter];

    // Check if we need to loop back to the first image
    if (counter < images.length - 1) {
        counter++;
    } else {
        counter = 0;
    }

    // Hide the previous image and show the current image
    currentPhoto.classList.remove('initial');
    images[counter].classList.add('initial');

    // Text for each image
    let text = document.getElementsByClassName('futureProjects');
    let currentText = [
        'Levi Ackerman :\n Levi Ackerman is utterly undefeated, always outsmarting and overpowering enemies with unmatched skill, precision, and relentless determination.',
        'Eren Yeager :\n Eren Yeager won through sheer willpower, pushing his limits, embracing his power, and relentlessly pursuing freedom no matter the cost.',
        'Itachi :\n Itachi Uchiha was sacrificial, choosing his village\'s safety over personal desires, enduring loneliness and pain to protect everyone he loved.',
        'Luffy :\n Luffy loves his crew deeply, treating them like family, always putting their well-being first, and fighting fiercely to protect them.',
        'Bakugo :\n Bakugo is reckless, charging into battles without hesitation, relying on brute force and explosive power, often ignoring risks and consequences.',
    ];

    // Update the text content for the current image
    for (let count = 0; count < text.length; count++) {
        if (count === counter) {
            text[count].textContent = currentText[count]; // Show text for the current image
        } else {
            text[count].textContent = ""; // Hide text for other images
        }
    }
}

let form = document.getElementById('charForm');
form.addEventListener('Submit', eventListeners);

function eventListeners(event) {
    event.preventDefault();
    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');
        if(firstName.value == '' || lastName.value == '') {
            alert("Name cannt not be empty");
        } else {
            form.removeEventListener("submit", eventListeners)
        }
    
}