// Effet parallax sur le header
window.addEventListener("scroll", () => {
    const header = document.querySelector("header#home");
    const offset = window.pageYOffset;
    header.style.backgroundPositionY = `${offset * 0.5}px`;
});

// Animation des projets
const projectItems = document.querySelectorAll(".col.project");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "scale(1)";
            }
        });
    },
    { threshold: 0.3 }
);

projectItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "scale(0.8)";
    item.style.transition = "all 0.5s ease";
    observer.observe(item);
});

// Animation des images de l'équipe
document.querySelectorAll(".team-member img").forEach((img) => {
    img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.1) rotate(5deg)";
        img.style.transition = "transform 0.3s ease";
    });
    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1) rotate(0)";
    });
});

// Animation pour le bouton de contact
const sendButton = document.querySelector("#contact button");
sendButton.addEventListener("mouseover", () => {
    sendButton.classList.add("shake");
    setTimeout(() => sendButton.classList.remove("shake"), 500);
});

// Animation de la navbar au défilement
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.padding = "20px 20px";
        navbar.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    } else {
        navbar.style.padding = "15px 20px";
        navbar.style.boxShadow = "none";
    }
});

// transition pour le chargement de la page
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// pour le hamburger que j'ai créer
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navbar = document.querySelector('.navbar');

    hamburgerMenu.addEventListener('click', () => {
        navbar.classList.toggle('active'); 
    });
});
