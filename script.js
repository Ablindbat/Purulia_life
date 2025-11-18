// DONATE QR MODAL
const modal = document.getElementById("qrModal");
const btn = document.getElementById("donateBtn");
const span = document.querySelector(".close");

btn.onclick = () => { modal.style.display = "flex"; }
span.onclick = () => { modal.style.display = "none"; }
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }


//New change

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");

    if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "flex";
    }
});

// Close when clicking mobile menu link
document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileMenu.style.display = "none";
    });
});

