//This is the New Single Replacement Image for all the profile picture in URL Format.
const ReplacementIMAGE = 'https://cdn1.iconfinder.com/data/icons/user-female-1/64/Hacker-User-Female-Profile-Avatar-512.png';


function replace() {
  // Select all profile picture elements in the LinkedIn feed
  const profilePictures = document.querySelectorAll('img.EntityPhoto, img.EntityPhoto-circle-5, img.ghost-person, img.ivm-image-view-model__circle-img ,img.feed-shared-actor__avatar-image, img.EntityPhoto-circle-3, img.update-components-actor__avatar-image, img.EntityPhoto-circle-0');

  profilePictures.forEach(img => {
    img.src = ReplacementIMAGE;
    img.srcset = ReplacementIMAGE; // For responsive images
  });
}

replace();

// Observe for any dynamic content changes in the DOM and then the profile pictures is replaced with the new image using the Function.
const observer = new MutationObserver(replace);

// Configuration of the observer
observer.observe(document.body, { childList: true, subtree: true });


