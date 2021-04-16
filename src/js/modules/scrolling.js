const scrolling = () => {
    const upElem = document.querySelectorAll('.pageup');

    window.addEventListener('scroll', function ()  {
        if (document.documentElement.scrollTop > 650) {
            upElem.forEach(item => {
                item.classList.add('animate__animated', 'animate__fadeIn');
                item.classList.remove('animate__fadeOut');
            });
        } else {
            upElem.forEach(item => {
                item.classList.add('animate__fadeOut');
                item.classList.remove('animate__fadeIn');
            });
        }
    });


    // Scrolling with raf

    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.5;

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

                document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });
};

export default scrolling;