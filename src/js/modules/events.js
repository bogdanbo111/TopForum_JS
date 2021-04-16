const events = () => {
    const eventBtns = document.querySelectorAll('.button_learn-event');

    eventBtns.forEach(item => {
        item.addEventListener('click', function () {
            this.textContent == 'Learn more' ? this.textContent = 'Show less' : this.textContent = 'Learn more';
            this.previousElementSibling.classList.toggle('h-110');
        })
    })
};

export default events;