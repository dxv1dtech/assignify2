const hw_input = document.getElementById("hw_input");
const hw_adder = document.getElementById("hw_adder");
const hw_container = document.getElementById("hw_container");
const hw_added_date = new Date().toLocaleString();

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

function load_hw() {
  const messages = JSON.parse(localStorage.getItem("messages")) || [];
  const dates = JSON.parse(localStorage.getItem("dates")) || [];
  const duedates = JSON.parse(localStorage.getItem("duedates")) || [];

  hw_container.innerHTML = "";

  if (messages.length === 0) {
    hw_container.textContent = "Nu există teme salvate!";
    return;
  }

  messages.forEach((message, index) => {
    const newDiv = document.createElement("div");

    const messageh2 = document.createElement("h2");
    messageh2.textContent = `Mesaj: ${message}`;
    messageh2.style.display = "block";
    messageh2.style.fontWeight = "bold";
    messageh2.style.overflowWrap = "break-word";

    const dateSpan = document.createElement("span");
    dateSpan.textContent = `Creat la: ${dates[index]}`;
    dateSpan.style.display = "block";
    dateSpan.style.color = "#555";

    const dueDateSpan = document.createElement("span");
    dueDateSpan.textContent = `Până pe: ${duedates[index] || "N/A"}`;
    dueDateSpan.style.display = "block";
    dueDateSpan.style.color = "#555";

    const removeButton = document.createElement("button");
    removeButton.textContent = "Șterge";
    removeButton.style.marginTop = "10px";
    removeButton.style.backgroundColor = "red";
    removeButton.style.color = "white";
    removeButton.style.border = "none";
    removeButton.style.padding = "5px 10px";
    removeButton.style.borderRadius = "5px";
    removeButton.style.cursor = "pointer";

    removeButton.addEventListener("click", () => {
      messages.splice(index, 1);
      dates.splice(index, 1);
      duedates.splice(index, 1);

      localStorage.setItem("messages", JSON.stringify(messages));
      localStorage.setItem("dates", JSON.stringify(dates));
      localStorage.setItem("duedates", JSON.stringify(duedates));

      alert("Tema a fost ștearsă!");
      load_hw();
    });

    newDiv.appendChild(messageh2);
    newDiv.appendChild(dateSpan);
    newDiv.appendChild(dueDateSpan);
    newDiv.appendChild(removeButton);

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