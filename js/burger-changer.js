const burgerMenuChanger = document.getElementById('burger-changer');
const htmlMini = document.documentElement;

burgerMenuChanger.addEventListener('change', function () {
    htmlMini.toggleAttribute('data-theme-dark');
    console.log('uu');
});
