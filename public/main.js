let burguerMenu = document.getElementById("burguer");
let normalMenu = document.getElementById("menu");

let normalMenuDisplay = false;

burguerMenu.addEventListener("click", () => {
    console.log("burguer menu was clicked")
    if (normalMenuDisplay == false) {
        normalMenuDisplay = !normalMenuDisplay;
        normalMenu.style.display = "grid";
    } else {
        normalMenuDisplay = !normalMenuDisplay;
        normalMenu.style.display = "none";
    }
})