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

function scrollToContact() {
    window.scrollTo({
        top: document.getElementById("contact").offsetTop,
        behavior: "smooth"
    });
}

const images = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1610402919524-dcd64aa0b17b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1591076787947-aaa4dec435d8?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542361345-89e58247f2d5?q=80&w=2070&auto=format&fit=crop"
];

let currentIndex = 0;

// Create background divs dynamically
const heroSection = document.querySelector(".hero");
images.forEach((image, index) => {
    const bgDiv = document.createElement("div");
    bgDiv.classList.add("hero-background");
    if (index === 0) bgDiv.classList.add("active"); // First image is active
    bgDiv.style.backgroundImage = `url('${image}')`;
    heroSection.appendChild(bgDiv);
});

const slides = document.querySelectorAll(".hero-background");

function changeBackground() {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    slides[currentIndex].classList.add("active");
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);