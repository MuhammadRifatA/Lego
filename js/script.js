// Class Active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika Menu Diclick
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//Klik Dluar Sidebar
const menu = document.querySelector('#menu');

document.addEventListener('click', function (e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});