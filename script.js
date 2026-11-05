
// =================================
// 1. MOBILE NAVIGATION
// =================================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});


// Close menu after clicking a link

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML =
            '<i class="fa-solid fa-bars"></i>';
    });
});


// =================================
// 2. AUTOMATIC FOOTER YEAR
// =================================

const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();


// =================================
// 3. SCROLL ANIMATION
// =================================

// Select elements that will appear on scroll

const revealElements = document.querySelectorAll(
    ".section-heading, .about-content, .skill-card, " +
    ".project-card, .timeline-item, .experience-card, " +
    ".contact-content"
);

// Add reveal class

revealElements.forEach(element => {
    element.classList.add("reveal");
});

// Observe elements when entering the screen

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});

// Start observing

revealElements.forEach(element => {
    observer.observe(element);
});


// =================================
// 4. ACTIVE NAVIGATION
// =================================

const sections = document.querySelectorAll("main section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// =================================
// 5. CONTACT FORM
// =================================

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("sender-name").value.trim();

    const email = document.getElementById("sender-email").value.trim();

    const message = document.getElementById("sender-message").value.trim();

    // Replace with your real email address
    const destinationEmail = "emailkamu@example.com";

    const subject = encodeURIComponent(
        "Portfolio Contact from " + name
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    const mailtoLink =
        "mailto:" + destinationEmail +
        "?subject=" + subject +
        "&body=" + body;

    window.location.href = mailtoLink;

});
