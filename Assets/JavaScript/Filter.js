// Select all resources buttons and resources cards
const resourcesNav = document.querySelectorAll(".Resources-nav button");
const resourcesCards = document.querySelectorAll(".Resources-cards .card");

// Add click event listener to each button
resourcesNav.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-name");

        // Remove the 'active' class from all buttons
        resourcesNav.forEach(btn => btn.classList.remove("active"));
        // Add the 'active' class to the clicked button
        button.classList.add("active");

        // Show/Hide cards based on category
        resourcesCards.forEach(card => {
            if (category === "all tutorials" || card.getAttribute("data-name") === category) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    const popups = document.querySelectorAll('.popup');
    const closes = document.querySelectorAll('.close');

    cards.forEach(card => {
        const popupId = card.getAttribute('data-popup');
        const popup = document.getElementById(popupId);

        card.addEventListener('click', () => {
            popup.style.display = 'block';
        });
    });

    closes.forEach(close => {
        close.addEventListener('click', function () {
            popups.forEach(popup => {
                popup.style.display = 'none';
            });
        });
    });

    window.addEventListener('click', function (event) {
        if (event.target.classList.contains('popup')) {
            event.target.style.display = 'none';
        }
    });
});
