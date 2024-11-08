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

//Slider1 carousel
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
//slider2 carousel
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

//Slider3
document.addEventListener("DOMContentLoaded", function () {
    $(document).ready(function () {
        $('#slider-3').owlCarousel({
            items: 2,
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            smartSpeed: 600,
            nav: true,
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

// to dynamically set the active link
document.addEventListener('DOMContentLoaded', function () {
    const currentLocation = window.location.href;
    const menuItems = document.querySelectorAll('.navbar__menu-link');

    menuItems.forEach(item => {
        if (item.href === currentLocation) {
            item.parentElement.classList.add('active');
        }
    });
});

//Contact form error handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const inputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
    let allValid = true;

    inputs.forEach(input => {
        const errorMessage = input.nextElementSibling;
        if (input.value.trim() === '') {
            errorMessage.classList.add('active');
            allValid = false;
        } else {
            errorMessage.classList.remove('active');
        }
    });

    if (allValid) {
        // Here, add logic to send the form data, e.g., AJAX or form submission
        alert("Form submitted successfully!");
    }
});

//for the accordion
document.querySelectorAll('.accordion__input').forEach(input => {
    input.addEventListener('change', function () {
        if (this.checked) {
            document.querySelectorAll('.accordion__input').forEach(otherInput => {
                if (otherInput !== this) {
                    otherInput.checked = false;
                }
            });
        }
    });
});

