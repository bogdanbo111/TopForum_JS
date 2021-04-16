import {postData} from "./request";

const forms = () => {
    const form = document.querySelectorAll('form'),
        checkbox = document.querySelectorAll('#checkbox'),
        buttonRegister = document.querySelector('.button_register'),
        inputs = document.querySelectorAll('input');

    checkbox.forEach(check => {
        check.addEventListener('click', () => {
            if (check.checked != true) {
                buttonRegister.disabled = true;
            } else {
                buttonRegister.disabled = false;
            }
        });
    });

    const message = {
        loading: 'Loading...',
        success: 'Thanks! We are contact with you soon',
        failure: 'Failure...',
        spinner: '../img/spinner.gif',
        ok: '../img/ok.png',
        fail: '../img/fail.png'
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            if (item.value == 'Standard' || item.value == 'Premium' || item.value == 'free'
                    || item.value == 'visa' || item.value == 'Invoice' || item.value == 'paypal') {
                item.value;
            } else {
                item.value = '';
            }
        });
    };


    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            item.classList.add('animate__animated', 'animate__fadeOut');
            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animate__animated', 'animate__fadeInUp');
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(item);
            let api = path.question;
            //item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
            //console.log(api);

            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        item.style.display = 'block';
                        item.classList.remove('animate__fadeOut');
                        item.classList.add('animate__fadeIn');

                    }, 5000);
                });
        });
    });
};

export default forms;