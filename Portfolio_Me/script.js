// basculer la barre de navigation de l'icône

// section de défilement
window.onscroll = () => {
    //  En-tête collant
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}