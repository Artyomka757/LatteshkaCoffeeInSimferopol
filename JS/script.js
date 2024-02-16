
    const header = document.querySelector("header");
    const hamburgerBtn = document.querySelector("#menu-btn");
    const closeMenuBtn = document.querySelector("#close-menu-btn");
    // Нажимание и открытие
    hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));
    // Закрыть меню
    closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());




