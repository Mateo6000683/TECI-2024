// Select all resources buttons and resources cards
const resourcesNav = document.querySelectorAll(".Resources-nav button");
const resourcesCards = document.querySelectorAll(".Resources-cards .card");
const bannerResources = document.getElementById('banner-resources');
const bannerYoutube = document.getElementById('banner-youtube');
const bannerInteractivity = document.getElementById('banner-interactivity');
const bannerSpline = document.getElementById('banner-spline');
const bannerOthers = document.getElementById('banner-others');


function reloadSplineViewer(banner) {
    const splineViewer = banner.querySelector('spline-viewer');
    if (splineViewer) {
        const newViewer = document.createElement('spline-viewer');
        newViewer.setAttribute('url', splineViewer.getAttribute('url'));
        banner.replaceChild(newViewer, splineViewer); 
    }
}

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

        bannerResources.style.display = 'none';
        bannerYoutube.style.display = 'none';
        bannerInteractivity.style.display = 'none';
        bannerSpline.style.display = 'none';
        bannerOthers.style.display = 'none';



        if (category === "youtube") {
            bannerYoutube.style.display = 'block';
            reloadSplineViewer(bannerYoutube);
        } else if (category === "Interactivity") {
            bannerInteractivity.style.display = 'block';
            reloadSplineViewer(bannerInteractivity);
        } else if (category === "spline") {
            bannerSpline.style.display = 'block';
            reloadSplineViewer(bannerSpline);
        } else if (category === "others") {
            bannerOthers.style.display = 'block';
            reloadSplineViewer(bannerOthers);
        } else {
            bannerResources.style.display = 'block';
            reloadSplineViewer(bannerResources);
        }

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
