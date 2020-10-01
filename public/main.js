let burguerMenu = document.getElementById("burguer");
let normalMenu = document.getElementById("menu");

let normalMenuDisplay = false;

burguerMenu.addEventListener("click", () => {
    if (normalMenuDisplay == false) {
        normalMenuDisplay = true;
        normalMenu.style.display = "grid";
    } else {
        normalMenuDisplay = false;
        normalMenu.style.display = "none";
    }
})

document.addEventListener("click", (e) => {
    if (e.target.id != "burguer" && !e.target.classList.contains("line")) {
        normalMenuDisplay = false;
        normalMenu.style.display = "none";
    }
})