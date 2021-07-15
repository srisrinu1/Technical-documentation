const icon = document.querySelector(".moon");
// const Section = document.querySelectorAll("section");
const container = document.querySelector(".Container");
// console.log(Section)
icon.addEventListener("click", () => {
    // icon.classList.toggle("dark-mode");
    // Section.forEach((section) => {
    //     section.classList.toggle("dark-mode");
    // });
    document.documentElement.classList.toggle('dark-mode');
})