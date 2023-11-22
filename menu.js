const nosotros = document.querySelector("#nosotros");
const productos = document.querySelector("#productos");
const contacto = document.querySelector("#contacto");


/* Menu nosotros */
nosotros.addEventListener("click", (p) => {
    p.preventDefault();

    const sectionP = document.querySelector(".nosotros");
    sectionP.scrollIntoView({behavior: "smooth"});
})

/* Menu productos */
productos.addEventListener("click", (s) => {
    s.preventDefault();

    const sectionS = document.querySelector(".productos");
    sectionS.scrollIntoView({behavior: "smooth"});
})

/* Menu Contacto */
contacto.addEventListener("click", (s) => {
    s.preventDefault();

    const sectionS = document.querySelector(".contacto");
    sectionS.scrollIntoView({behavior: "smooth"});
})
