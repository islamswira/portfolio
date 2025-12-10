// ===============================
// Scroll Reveal Animations
// ===============================
const revealElements = document.querySelectorAll(
    ".project-card, .card, .blog-card, .fade-up, .reveal"
);

const revealOnScroll = () => {
    let delay = 0;

    revealElements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) {
            setTimeout(() => {
                el.classList.add("active");
            }, delay);

            delay += 120;
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===============================
// Experience Toggles
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".exp-toggle");

    toggles.forEach((btn) => {
        btn.addEventListener("click", () => {
            const card = btn.closest(".exp-card");
            const expanded = card.classList.toggle("expanded");
            btn.textContent = expanded ? "Hide details" : "Show details";
        });
    });
});

// ===============================
// Scroll Indicator Hide
// ===============================
document.addEventListener("scroll", () => {
    const indicator = document.querySelector(".scroll-indicator");
    if (!indicator) return;

    indicator.classList.toggle("hidden", window.scrollY > 120);
});

// ===============================
// Auto-scrolling phone screen slider
// ===============================
/* AUTO SLIDER TIMING FOR PROJECT PHONE MOCKUPS */
document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".screen-slider-auto");

    sliders.forEach(slider => {
        const images = slider.querySelectorAll("img");
        const count = images.length;

        if (count === 0) return;

        // مدة عرض كل صورة (ثواني)
        const perSlide = 3;

        // إجمالي الزمن = عدد الصور * مدة كل صورة
        const totalDuration = count * perSlide;

        // إجمالي المسافة = عدد الصور * 100% بالـ translate
        const totalTranslate = `-${100 * count}%`;

        // حقن الـ CSS variables
        slider.style.setProperty("--slider-duration", `${totalDuration}s`);
        slider.style.setProperty("--slider-translate", totalTranslate);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const nameError = nameInput.nextElementSibling;
    const emailError = emailInput.nextElementSibling;
    const messageError = messageInput.nextElementSibling;

    function validateName() {
        const nameValue = nameInput.value.trim();
        const nameRegex = /^[A-Za-z\s]+$/;

        if (nameValue.length < 2) {
            nameError.textContent = "Name must be at least 2 characters.";
            return false;
        }
        if (!nameRegex.test(nameValue)) {
            nameError.textContent = "Name must contain letters only.";
            return false;
        }
        nameError.textContent = "";
        return true;
    }

    function validateEmail() {
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailValue)) {
            emailError.textContent = "Please enter a valid email address.";
            return false;
        }
        emailError.textContent = "";
        return true;
    }

    function validateMessage() {
        const msgValue = messageInput.value.trim();

        if (msgValue.length < 5) {
            messageError.textContent = "Message must be at least 5 characters.";
            return false;
        }
        messageError.textContent = "";
        return true;
    }

    // Real-time validation
    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    messageInput.addEventListener("input", validateMessage);

    form.addEventListener("submit", (event) => {
        const validName = validateName();
        const validEmail = validateEmail();
        const validMessage = validateMessage();

        if (!validName || !validEmail || !validMessage) {
            event.preventDefault(); // Stop form submission
        }
    });
});
