const burger = document.querySelector('.burger');
const burgerWrapper = document.querySelector('.burgerWrapper');
const nav = document.querySelector('.navigation');
const main = document.querySelector('.mainContent');


// Handlers
const burgerClickHandler = () => {
    nav.classList.toggle('navigationOn')
    main.classList.toggle('mainContentActive')
    burger.classList.toggle('toggle')
    burgerWrapper.classList.toggle('burgerWrapperActive')
}

// Event listeners
burger.addEventListener('click', burgerClickHandler);
