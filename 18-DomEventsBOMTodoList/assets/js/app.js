// let hours = 0;
// let minutes = 0;
// let seconds = 0;

// let intervalID = setInterval(function() {
//     seconds++;

//     if (seconds === 60) {
//         seconds = 0;
//         minutes++;
//     }

//     if (minutes === 60) {
//         minutes = 0;
//         hours++;
//     }
//     const formattedHours = hours < 10 ? `0${hours}` : hours;
//     const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
//     const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

//     console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
// }, 800);
let form = document.querySelector("form");
let input = document.querySelector("#input");
let list = document.querySelector(".list");

let todoCount = 0;

form.addEventListener("submit", createTodo);

function createTodo(e) {
  e.preventDefault();

  if (input.value.trim() !== "") {
    todoCount++;

    let li = document.createElement("li");
    li.classList.add("list_item");

    let number = document.createElement("span");
    number.classList.add("number");
    number.textContent = `${todoCount}. `;


    let span = document.createElement("span");
    span.classList.add("task");
    span.textContent = input.value;
    span.style.color="red"


    let setting = document.createElement("div");
    setting.classList.add("setting");


    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("click", (e) => {
      let taskElement = e.target.closest(".list_item").querySelector(".task");

      if (e.target.checked) {
        taskElement.style.textDecoration = "line-through";
        taskElement.style.color = "green";
      } else {
        taskElement.style.textDecoration = "none";
        taskElement.style.color = "red";
      }
    });


    let editIcon = document.createElement("i");
    editIcon.classList.add("fa-solid", "fa-pen-to-square");

    editIcon.addEventListener("click", (e) => {
      let parentelement = e.target.closest(".list_item");
      let currentTodo = parentelement.querySelector(".task");
      let newtodo = prompt("edit todo", currentTodo.textContent);
      if (newtodo !== null && newtodo.trim() !== "") {
        currentTodo.textContent = newtodo;
      }
    });


    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash");

    deleteIcon.addEventListener("click", (e) => {
      let parentelement = e.target.closest(".list_item");


      if (parentelement.querySelector("input[type='checkbox']").checked) {
        parentelement.remove();
        updateOrder();
      } else {
        alert("İcra olunmayan todoları silmək olmaz!");
      }
    });

    setting.append(checkbox, deleteIcon, editIcon);

    li.append(number, span, setting);
    list.appendChild(li);

    input.value = "";
  }
}

function updateOrder() {
  const items = list.querySelectorAll(".list_item");
  items.forEach((item, index) => {
    const number = item.querySelector(".number");
    number.textContent = `${index + 1}. `;
  });
  todoCount = items.length;
}
