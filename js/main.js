document.querySelector('.burger_menu').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.nav-menu__ul').classList.toggle('open');
})