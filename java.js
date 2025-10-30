// ----------------- MODERN STAGGERED REVEAL EFFECT -----------------
document.addEventListener("DOMContentLoaded", () => {
    const revealSections = document.querySelectorAll(".reveal");

    const observerOptions = {
        threshold: 0.2, // triggers when 20% of element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const children = entry.target.querySelectorAll(".reveal-item");

                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add("active");
                    }, index * 150); // stagger timing (150ms apart)
                });

                observer.unobserve(entry.target); // reveal once, no repeats
            }
        });
    }, observerOptions);

    revealSections.forEach(section => observer.observe(section));
});

// ---------------- CONTACT ALERT (for "Hire Me" button) ----------------
const hireBtn = document.querySelector(".hire");

if (hireBtn) {
    hireBtn.addEventListener("click", function () {
        alert("Connect with Speedy:\n\nInstagram:instagram.com/godwingolden_200\nWhatsApp: wa.me/233240213582\nFacebook: facebook.com/Gr sowa");
        event.preventDefault();
        alert("Thanks for reaching out! Speedy will contact you soon 😎");
        window.location.href = "mailto:godwinsowah25@gmail.com";
    });
}

// ----------------- GREETING MESSAGE IN CONSOLE -----------------
window.onload = () => {
    console.log("Welcome to Speedy's Profile Site 🚀");
};
