const burger = document.querySelector('.burger');
const burgerWrapper = document.querySelector('.burgerWrapper');
const nav = document.querySelector('.navigation');
const main = document.querySelector('.mainContent');
// const showMoreButton = document.querySelector('.showMore');
// const showMoreMessage = document.querySelector('.showMoreMessage');


// Handlers
const burgerClickHandler = () => {
    nav.classList.toggle('navigationOn')
    main.classList.toggle('mainContentActive')
    burger.classList.toggle('toggle')
    burgerWrapper.classList.toggle('burgerWrapperActive')
}

// const showMoreHandler = (e) => {
//     const btn = e.target;
    
//     if (btn.textContent === 'Ver más') {
//         showMoreButton.textContent = "Ver menos"
//         showMoreMessage.innerText = "Ups, parece que no hay más contenido.";
//     } else {
//         showMoreButton.textContent = "Ver más"
//         showMoreMessage.innerText = "";
//     }
// }

// Event listeners
burger.addEventListener('click', burgerClickHandler);
// showMoreButton.addEventListener('click', showMoreHandler)
