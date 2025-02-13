const citat_container = document.getElementById("citat");

let citate = [
    "test1",
    "test2",
    "test3"
];

function load_citat() {
    let citat_random_id = Math.floor(Math.random() * citate.length);
    let citat_final = citate[citat_random_id];

    citat_container.innerHTML = "";

    const citat_h1 = document.createElement("h1");
    citat_h1.textContent = citat_final;
    citat_h1.style.textDecoration = "underline";
    citat_h1.style.fontSize = "50px"

    citat_container.appendChild(citat_h1);
}

window.addEventListener("DOMContentLoaded", load_citat);