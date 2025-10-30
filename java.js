// ----------------- SCROLL REVEAL EFFECT -----------------
window.addEventListener("scroll", reveal);

function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active"); // optional: reset when scrolled up
        }
    }
}

// ---------------- CONTACT ALERT (for "Hire Me" button) ----------------
const hireBtn = document.querySelector(".hire");

if (hireBtn) {
    hireBtn.addEventListener("click", function (event) {
        event.preventDefault(); // stop instant redirect
        alert("Thanks for reaching out! Speedy will contact you soon 😎");
        window.location.href = "mailto:godwinsowah25@gmail.com"; // open email after alert
    });
}

// ----------------- GREETING MESSAGE IN CONSOLE -----------------
window.onload = () => {
    console.log("Welcome to Speedy's Profile Site 🚀");
};
