document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    console.log('Menu icon:', menuIcon); // Check if the menu icon is selected
    console.log('Menu:', menu); // Check if the menu is selected

    menuIcon.addEventListener('click', function () {
        menuIcon.classList.toggle('active');
        console.log('Menu icon clicked'); // Log when the icon is clicked
        
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block';
            setTimeout(() => {
                menu.classList.add('show');
            }, 10);
            console.log('Menu displayed'); // Log when the menu is displayed
        } else {
            menu.classList.remove('show');
            setTimeout(() => {
                menu.style.display = 'none';
            }, 500);
            console.log('Menu hidden'); // Log when the menu is hidden
        }
    });
});
