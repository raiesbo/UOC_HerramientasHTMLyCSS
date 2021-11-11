const showMoreButton = document.querySelector('.showMore');
const showMoreMessage = document.querySelector('.showMoreMessage');


// Handlers
const showMoreHandler = (e) => {
    const btn = e.target;
    
    if (btn.textContent === 'Ver más') {
        showMoreButton.textContent = "Ver menos"
        showMoreMessage.innerText = "Ups, parece que no hay más contenido.";
    } else {
        showMoreButton.textContent = "Ver más"
        showMoreMessage.innerText = "";
    }
}

// Event listeners
showMoreButton.addEventListener('click', showMoreHandler)
