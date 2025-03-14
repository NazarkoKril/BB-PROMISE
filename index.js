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

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');

    function getRandomPosition(element, container) {
        const containerRect = container.getBoundingClientRect();
        const elementWidth = element.offsetWidth;
        const elementHeight = element.offsetHeight;

        const maxX = containerRect.width - elementWidth;
        const maxY = containerRect.height - elementHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        return { x: randomX, y: randomY };
    }

    function moveElementRandomly(element, container) {
        if (!element) return;  // Перевірка, чи існує елемент
        const newPosition = getRandomPosition(element, container);
        element.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
    }

    sections.forEach(section => {
        const contact2 = section.querySelector('.blue_round');
        const contact3 = section.querySelector('.rose_round');

        setInterval(() => {
            moveElementRandomly(contact2, section);
        }, 1000 + Math.random() * 1000);

        setInterval(() => {
            moveElementRandomly(contact3, section);
        }, 1000 + Math.random() * 1000);
    });
});


// video 


document.querySelectorAll('.my-video').forEach(function (videoElement) {
    videojs(videoElement, {
        fluid: true
    });
});
// case__swiper 
const swiper5 = new Swiper('.case__swiper', {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    slidesPerView: 4,
    spaceBetween: 50,
    speed: 800,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.2,
            spaceBetween: 15
        },
        500: {
            slidesPerView: 2.2,
            spaceBetween: 20
        },
        720: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1150: {
            slidesPerView: 4,
            spaceBetween: 50,
        }
    }
});

const swiper6 = new Swiper('.blog_slider', {
    navigation: {
        nextEl: ".blog_next",
        prevEl: ".blog_prev",
    },
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 800,
    breakpoints: {

        320: {
            slidesPerView: 1,
            spaceBetween: 15
        },

        950: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1150: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
});
const swiper7 = new Swiper('.blog_slider1', {
    navigation: {
        nextEl: ".blog_next",
        prevEl: ".blog_prev",
    },
    slidesPerView: 4,
    spaceBetween: 20,
    speed: 800,
    breakpoints: {

        320: {
            slidesPerView: 2,
            spaceBetween: 15
        },

        950: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1150: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    }
});
const swiper8 = new Swiper('.swiper_rrev', {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,
    breakpoints: {


    }
});
document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".header__item.dropdown_mob");
    const menu = document.querySelector(".dropdown-menu_mob");
    const toggleButton = document.querySelector(".box"); 
  
    toggleButton.addEventListener("click", function (event) {
      event.stopPropagation(); 
      menu.classList.toggle("active");
    });
  
    document.addEventListener("click", function (event) {
      if (!dropdown.contains(event.target)) {
        menu.classList.remove("active");
      }
    });
  });
  