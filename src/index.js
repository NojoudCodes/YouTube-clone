const toggleButton = document.getElementById('menu-toggle');

toggleButton.addEventListener('click', () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('flex');
});

const sidebarToggle = document.getElementById('sidebar-toggle');
sidebarToggle.addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    const sidebarMenuToggle = document.querySelector('.sidebar-toggle');
    const contentDiv = document.querySelector('.content');

    sidebar.classList.toggle('sidebar-hidden');
    sidebarMenuToggle.classList.toggle('sidebar-toggle-show');
    contentDiv.classList.toggle('content-stretch');
});

const carousel = document.querySelector('.carousel-items');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function toggleButtonVisibility() {
    const scrollLeft = carousel.scrollLeft;
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    if (scrollLeft <= 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }

    if (scrollLeft >= maxScrollLeft) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';
    }
}


toggleButtonVisibility();


prevBtn.addEventListener('click', () => {
    carousel.scrollBy({
        left: -200,
        behavior: 'smooth',
    });
});

    nextBtn.addEventListener('click', () => {
    carousel.scrollBy({
        left: 200,
        behavior: 'smooth',
    });
});


carousel.addEventListener('scroll', toggleButtonVisibility);
