const hw_input = document.getElementById("hw_input");
const hw_adder = document.getElementById("hw_adder");
const hw_container = document.getElementById("hw_container");
const hw_added_date = new Date().toLocaleString();
const hw_input_remover_id = document.getElementById("hw_remove");
const hw_remover_button = document.getElementById("hw_remover_button");

hw_adder.addEventListener("click", () => {
  const userInput = hw_input.value;
  const hw_duedate = document.getElementById("hw_duedate").value;

  if (!userInput) {
    alert("Introdu un mesaj!");
    return;
  }

  const messages = JSON.parse(localStorage.getItem("messages")) || [];
  const dates = JSON.parse(localStorage.getItem("dates")) || [];
  const duedates = JSON.parse(localStorage.getItem("duedates")) || [];

  messages.push(userInput);
  dates.push(hw_added_date);
  duedates.push(hw_duedate);

  localStorage.setItem("messages", JSON.stringify(messages));
  localStorage.setItem("dates", JSON.stringify(dates));
  localStorage.setItem("duedates", JSON.stringify(duedates));

  alert("Mesaj adăugat!");
  hw_input.value = "";
  hw_duedate.value = "";
  window.location.reload();
});

hw_remover_button.addEventListener("click", () => {
  const messages = JSON.parse(localStorage.getItem("messages")) || [];
  const dates = JSON.parse(localStorage.getItem("dates")) || [];
  const duedates = JSON.parse(localStorage.getItem("duedates")) || [];
  const homeworkIndex = parseInt(hw_input_remover_id.value, 10) - 1;

  if (isNaN(homeworkIndex) || homeworkIndex < 0 || homeworkIndex >= messages.length) {
    alert("Numărul introdus este invalid!");
    return;
  }

  messages.splice(homeworkIndex, 1);
  dates.splice(homeworkIndex, 1);
  duedates.splice(homeworkIndex, 1);

  localStorage.setItem("messages", JSON.stringify(messages));
  localStorage.setItem("dates", JSON.stringify(dates));
  localStorage.setItem("duedates", JSON.stringify(duedates));

  alert("Tema a fost ștearsă!");
  hw_input_remover_id.value = "";
  window.location.reload();
});

function load_hw() {
  const messages = JSON.parse(localStorage.getItem("messages")) || [];
  const dates = JSON.parse(localStorage.getItem("dates")) || [];
  const duedates = JSON.parse(localStorage.getItem("duedates")) || [];


  hw_container.innerHTML = "";

  if (messages.length === 0) {
    hw_container.textContent = "Nu există teme salvate!";
    return;
  }

  messages.forEach((messages, index) => {
    const newDiv = document.createElement("div");
    
    const messageSpan = document.createElement("h2");
    messageSpan.textContent = `Mesaj: ${messages}`;
    messageSpan.style.display = "block";
    messageSpan.style.fontWeight = "bold";
    messageSpan.style.overflowWrap = "break-word";

    const dateSpan = document.createElement("span");
    dateSpan.textContent = `Creat la: ${dates[index]}`;
    dateSpan.style.display = "block";
    dateSpan.style.color = "#555";

    const dueDateSpan = document.createElement("span");
    dueDateSpan.textContent = `Până pe: ${duedates[index] || "N/A"}`;
    dueDateSpan.style.display = "block";
    dueDateSpan.style.color = "#555";

    newDiv.appendChild(messageSpan);
    newDiv.appendChild(dateSpan);
    newDiv.appendChild(dueDateSpan);

    newDiv.style.border = "1px solid #ccc";
    newDiv.style.maxWidth = "100%";
    newDiv.style.padding = "10px";
    newDiv.style.margin = "5px 0";
    newDiv.style.borderRadius = "5px";
    newDiv.style.backgroundColor = "#f9f9f9";

    hw_container.appendChild(newDiv);
  });
}

window.addEventListener("DOMContentLoaded", load_hw);