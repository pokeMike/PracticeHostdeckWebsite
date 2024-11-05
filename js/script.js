const menuToggle = document.querySelector('.navbar__mobile-menu-toggle');
const menuItems = document.querySelector('.navbar__mobile-menu-items');
const closeBtn = document.querySelector('.navbar__close-btn');
const overlay = document.querySelector('.navbar__mobile-overlay');

// Function to open the sidebar
function openMenu() {
    menuItems.classList.add('active');
    overlay.classList.add('active');
}

// Function to close the sidebar
function closeMenu() {
    menuItems.classList.remove('active');
    overlay.classList.remove('active');
}

// Event listeners for opening and closing the menu
menuToggle.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

document.addEventListener("DOMContentLoaded", function () {
    $(document).ready(function () {
        $('#slider-1').owlCarousel({
            items: 5,
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: false,
            smartSpeed: 600,
            nav: false,
            dots: false
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    $(document).ready(function () {
        $('#slider-2').owlCarousel({
            items: 2,
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            smartSpeed: 600,
            nav: false,
            dots: false
        });
    });
});

document.querySelector('.newsletter-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission for validation

    const emailInput = document.getElementById('email');
    const errorLabel = document.querySelector('.form-error');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email pattern

    // Check if the input is empty or doesn't match the email pattern
    if (!emailInput.value || !emailPattern.test(emailInput.value)) {
        errorLabel.style.display = 'block'; // Show error
        errorLabel.textContent = 'This field is required and should be in a valid email format.';
        emailInput.focus(); // Focus on the input field for better UX
    } else {
        errorLabel.style.display = 'none'; // Hide error if input is valid
        // Proceed with form submission or any other actions
        console.log('Form submitted'); // Placeholder for submission
    }
});