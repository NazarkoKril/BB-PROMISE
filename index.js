// swiper 
const swiper = new Swiper(".feedback__swiper", {

    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    slidesPerView: 1,
    spaceBetween: 30,
    //   autoplay: {
    //     delay: 1000,
    //     disableOnInteraction: false,
    //     stopOnLastSlide: false,

    //   },
    speed: 800,
    //   breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //       slidesPerView: 2,
    //       spaceBetween: 20
    //     },
    //     // when window width is >= 480px
    //     480: {
    //       slidesPerView: 3,
    //       spaceBetween: 30
    //     },
    //     // when window width is >= 640px
    //     640: {
    //       slidesPerView: 4,
    //       spaceBetween: 40
    //     }
    //   }
});
//search

document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.getElementById('search-icon');
    const searchContainer = document.getElementById('search-container');
    const overlay = document.getElementById('overlay');

    searchIcon.addEventListener('click', function (event) {
        event.stopPropagation();
        toggleSearch();
    });

    overlay.addEventListener('click', closeSearch);

    document.addEventListener('click', function (event) {
        if (!searchContainer.contains(event.target)) {
            closeSearch();
        }
    });

    function toggleSearch() {
        const isActive = searchContainer.classList.contains('active');
        if (!isActive) {
            showSearch();
        } else {
            closeSearch();
        }
    }

    function showSearch() {
        searchContainer.classList.add('active');
        overlay.classList.add('active');
    }

    function closeSearch() {
        searchContainer.classList.remove('active');
        overlay.classList.remove('active');
    }
});

// burger 
document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector('.burger__icon');
    const burgerMenu = document.querySelector('.burger__menu');

    if (burgerIcon && burgerMenu) {
        burgerIcon.addEventListener('click', () => {
            burgerIcon.classList.toggle('active');
            burgerMenu.classList.toggle('active');
            document.body.style.overflow = burgerMenu.classList.contains('active') ? 'hidden' : '';
        });

        document.addEventListener('click', (event) => {
            if (!burgerMenu.contains(event.target) && !burgerIcon.contains(event.target)) {
                burgerIcon.classList.remove('active');
                burgerMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});

//animation 

document.addEventListener('DOMContentLoaded', function () {
    const contactSection = document.querySelector('.contact');
    const contact2 = document.querySelector('.blue_round');
    const contact3 = document.querySelector('.rose_round');

    function getRandomPosition(element, container) {
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const elementWidth = element.offsetWidth;
        const elementHeight = element.offsetHeight;

        const maxX = containerWidth - elementWidth;
        const maxY = containerHeight - elementHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        return { x: randomX, y: randomY };
    }

    function moveElementRandomly(element, container) {
        const newPosition = getRandomPosition(element, container);
        element.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
    }

    setInterval(() => {
        moveElementRandomly(contact2, contactSection);
        moveElementRandomly(contact3, contactSection);
    }, 1000);
});
