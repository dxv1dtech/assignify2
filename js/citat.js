const citat_container = document.getElementById("citat");

let citate = [
    "„Succesul este suma unor mici eforturi, repetate zi de zi.” - R. Collier",
    "„Dacă nu țintiți spre nimic, îl veți reuși de fiecare dată.” – Zig Zigler",
    "„Expertul în orice a fost cândva un începător.” – Helen Hayes"
];

function load_citat() {
    let citat_random_id = Math.floor(Math.random() * citate.length);
    let citat_final = citate[citat_random_id];

    citat_container.innerHTML = "";

    const citat_h2 = document.createElement("h2");
    citat_h2.textContent = citat_final;
    citat_h2.style.textDecoration = "underline";
    citat_h2.style.fontSize = "50px"

    citat_container.appendChild(citat_h2);
}

window.addEventListener("DOMContentLoaded", load_citat);