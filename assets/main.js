/* On change h1 dans le texte html à l'aide de js

let myHeading = document.querySelector('h1');
myHeading.textContent = 'Bonjour, monde !';
*/

/*
Pop Up à l'ouverture du site

alert ('CREVEEEEEEEEETTES')
*/


// Les evenements:

document.querySelector('i').addEventListener('click', function() {
    alert('Aïe, arrêtez de cliquer !!');
});

// Changer l'image du site !

let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/crevette.png') {
      myImage.setAttribute('src', 'images/Crevette_transformation.png');
    } else {
      myImage.setAttribute('src', 'images/crevette.png');
    }
});

// Message personnalisé

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Declinez votre identité.');
  localStorage.setItem('Pseudonyme', myName);
  myHeading.textContent = 'Les crevettes taiment beaucoup, ' + myName;
}

myButton.addEventListener('click', function() {
  setUserName();
});

if ('click', myName) {
  location.reload();
}