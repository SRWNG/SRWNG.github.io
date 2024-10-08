document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener('click', function () {
        menuIcon.classList.toggle('active');
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block';
            setTimeout(() => {
                menu.classList.add('show');
            }, 10);
        } else {
            menu.classList.remove('show');
            setTimeout(() => {
                menu.style.display = 'none';
            }, 500);
        }
    });
});

