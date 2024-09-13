const open = document.querySelector("#Abrir");
const close = document.querySelector("#Cerrar");
const nav = document.querySelector("#navbar");

open.addEventListener("click", () => {
    nav.classList.add("visible");
});


close.addEventListener("click", () => {
    nav.classList.remove("visible");
});
