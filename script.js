function changeNav() {
    var nav = document.getElementById('nav');
    var head = document.getElementById('heading');
    var pages = document.querySelectorAll('.pages');

    if (!nav || pages.length === 0) return;

    var scrollValue = window.scrollY;

    if (scrollValue > 0) {
        nav.classList.add('navbg');
        head.classList.add('heading-color');
        pages.forEach(page => page.classList.add('page-color'));
    } else {
        nav.classList.remove('navbg');
        head.classList.remove('heading-color');
        pages.forEach(page => page.classList.remove('page-color'));
    }
}

window.addEventListener('scroll', changeNav);
