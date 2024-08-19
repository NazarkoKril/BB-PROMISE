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