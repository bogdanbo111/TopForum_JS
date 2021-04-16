const media = () => {
        const no = document.querySelectorAll('.d-none'),
            more = document.querySelectorAll('.more'),
            less = document.querySelectorAll('.less');

        more.forEach(item => {
            item.addEventListener('click', () => {
                no.forEach(item => {
                    item.style.display = "block";
                    item.classList.add('animate__animated', 'animate__fadeIn');
                });
                more.forEach(item => {
                    item.style.display = "none";
                });
            });
        });
        less.forEach(item => {
            item.addEventListener('click', () => {
                no.forEach(item => {
                    item.style.display = "none";
                    item.classList.remove('animate__animated', 'animate__fadeIn');
                });
                more.forEach(item => {
                    item.style.display = "block";
                })
            });
        });
};

export default media;