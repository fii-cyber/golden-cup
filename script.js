
// Function to switch between website pages
function showPage(pageId) {

    // Hide all pages
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    // Show the selected page
    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    // Update navigation button appearance
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function(link) {
        link.classList.remove("active");
    });

    const buttons = document.querySelectorAll(".nav-link");

    buttons.forEach(function(button) {
        if (button.getAttribute("onclick") === `showPage('${pageId}')`) {
            button.classList.add("active");
        }
    });

    // Close mobile navigation after clicking a page
    const navbarMenu = document.getElementById("navbarMenu");

    if (navbarMenu.classList.contains("show")) {
        const menu = bootstrap.Collapse.getOrCreateInstance(navbarMenu);
        menu.hide();
    }

    // Go back to the top of the page
    window.scrollTo(0, 0);
}


// Contact form interaction
document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("formMessage").textContent =
        "Thank you! Your message has been received.";

    document.getElementById("contactForm").reset();

});




