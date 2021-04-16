const register = () => {
   const registerBtn = document.querySelector('.button_subheader');

   registerBtn.addEventListener('click', () => {
       document.location = './register.html';
   });
};

export default register;