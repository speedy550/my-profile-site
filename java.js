// ----------------- SCROLL REVEAL EFFECT -----------------
window.addEventListener("scroll", reveal);

function reveal() {
    const reveals = document.querySelectorAll("reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            reveal[i].classList.add("active");
        }
    }
}

// ---------------- CONTACT ALERT (for "Hire Me" button) ----------------
const hireBtn = document.querySelector("hire");

if (hireBtn) {
    hireBtn.addEventListener("click", function () {
        alert("Thanks for reaching out, Speedy will contact you soon 😎");
    });
}

// ----------------- GREETING MESSAGE IN CONSOLE -----------------
window.onload = () => {
    console.log("welcome to Speedy's Profile Site 🚀");
};
