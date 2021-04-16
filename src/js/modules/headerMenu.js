const headerMenu = () => {
    const menuItem = document.querySelectorAll('.menu__item');

    menuItem.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.lastElementChild.classList.add('sub-menu__active', 'animate__animated', 'animate__fadeIn');
        })
    });
    menuItem.forEach(item => {
        item.addEventListener('mouseout', () => {
            item.lastElementChild.classList.remove('sub-menu__active', 'animate__animated', 'animate__fadeIn');
        });
    });
};

export default headerMenu;