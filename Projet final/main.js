// the page is loaded
//
function handleLoad(){
    alert ('page is well loaded !')
}

let items = document.querySelectorAll('.container-slide img');
let nbSlide = items.length;
let suivant = document.querySelector('.right');
let precedent = document.querySelector('.left');
let i = 0;

function slideSuivante(){
    items[i].classList.remove('active');

    if(i < nbSlide -1 ){
        i++;
    } else {
        i = 0;
    }

    items[i].classList.add('active')
    console.log(i);
    
}
suivant.addEventListener('click', slideSuivante)


function slidePrecedente(){
    items[i].classList.remove('active');

    if(i > 0){
        i--;
    } else {
        i = nbSlide - 1;
    }

    items[i].classList.add('active')
    
}
precedent.addEventListener('click', slidePrecedente)
