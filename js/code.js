const humberger = document.getElementById("humberger");
const nav = document.getElementById("nav");
humberger.addEventListener("click", () => {
    humberger.classList.toggle("active");
    nav.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    humberger.classList.remove('active');
    nav.classList.remove('active');
})
);