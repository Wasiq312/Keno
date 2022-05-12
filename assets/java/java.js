let menu = document.querySelector('#menu');
let navigation = document.querySelector('.navigation');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navigation.classList.toggle('active');
}