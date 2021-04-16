const learnMore = () => {
    const overcard = document.querySelectorAll('.overlay__card'),
        buttonLearn = document.querySelectorAll('.button_learn');

    buttonLearn.forEach(item => {
       item.addEventListener('click', () => {
           item.textContent == 'Learn more' ? item.textContent = 'Show less' : item.textContent = 'Learn more';
          overcard.forEach(card => {
              card.classList.toggle('d-block');
          });
          item.closest('.sponsors__item').classList.toggle('big');
          let span = item.closest('.sponsors__item_btn').previousElementSibling;
           span.classList.contains('sponsors__item_span') ?
               span.classList.remove('sponsors__item_span') :
               span.classList.add('sponsors__item_span');
       });
    });
    overcard.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.remove('d-block');
            buttonLearn.forEach(item => {
                item.textContent = 'Learn more';
                item.closest('.sponsors__item').classList.remove('big');
                item.closest('.sponsors__item_btn').previousElementSibling.classList.add('sponsors__item_span');
            });
        });
    })
};

export default learnMore;