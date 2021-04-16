const selectTab = () => {

    const fieldSelect = document.querySelectorAll('.register__field_sel'),
        contentSponsors = document.querySelectorAll('.content__sponsors');


    fieldSelect.forEach(item => {
        item.addEventListener('change', function () {
            contentSponsors.forEach(cont => {
                cont.classList.remove('content__sponsors_active');
            });
            let index = this.options[this.selectedIndex].index;
            contentSponsors[index].classList.add('content__sponsors_active');
        });
    })
};

export default selectTab;




