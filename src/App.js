"use strict";

//selectors
const nameInput = document.querySelector(".company_name input");
const stateInput = document.querySelector(".company_state input");
const employeesInput = document.querySelector(".company_employees input");
const addButton = document.querySelector(".add_btn");
const table = document.querySelector("tbody");
const deleteBtn = document.querySelector(".fa-trash");
//Event Listeners
addButton.addEventListener("click", addItem);
table.addEventListener("click", deleteEdit);

//Functions
function addItem(event) {
  //prevnt form from submitting
  event.preventDefault();
  //appending to table tag
  table.innerHTML += `
        <tr class="bg-white border-b">
        <td class="p-1">
        <input style="outline:none" type="text" readonly value = ${nameInput.value} />
        
        </td>
        <td>
        <input style="outline:none" type="text" readonly value = ${stateInput.value} />
        </td>
        <td>
        <input style="outline:none" type="number" readonly value = ${employeesInput.value} />
        </td>
        <td class="flex items-center gap-2">
            <i class="fa-solid fa-pen-to-square mt-1 text-purple-400 cursor-pointer"></i>
            <i class="fa-solid fa-trash mt-1 text-red-500 cursor-pointer"></i>
        </td>
        </tr>
        `;

  nameInput.value = "";
  stateInput.value = "";
  employeesInput.value = "";
}

function deleteEdit(e) {
  const item = e.target;
  //delete item
  if (item.classList[1] === "fa-trash") {
    item.parentElement.parentElement.remove();
  }

  //edit item for edit icon
  if (
    item.classList[1] === "fa-pen-to-square" ||
    item.classList[4] === "fa-pen-to-square"
  ) {
    item.classList.remove("fa-pen-to-square");
    item.classList.add("fa-sd-card");
    item.style.color = "#2ecc71";
    item.parentElement.parentElement.children[0].children[0].removeAttribute(
      "readonly"
    );
    item.parentElement.parentElement.children[0].children[0].style.backgroundColor =
      "rgb(192,132,252)";
    item.parentElement.parentElement.children[1].children[0].removeAttribute(
      "readonly"
    );
    item.parentElement.parentElement.children[1].children[0].style.backgroundColor =
      "rgb(192,132,252)";
    item.parentElement.parentElement.children[2].children[0].removeAttribute(
      "readonly"
    );
    item.parentElement.parentElement.children[2].children[0].style.backgroundColor =
      "rgb(192,132,252)";

    //save item for save icon
  } else if (item.classList[4] === "fa-sd-card") {
    item.classList.remove("fa-sd-card");
    item.classList.add("fa-pen-to-square");
    item.style.color = "rgb(192,132,252)";
    item.parentElement.parentElement.children[0].children[0].setAttribute(
      "readonly",
      "readonly"
    );
    item.parentElement.parentElement.children[1].children[0].setAttribute(
      "readonly",
      "readonly"
    );
    item.parentElement.parentElement.children[2].children[0].setAttribute(
      "readonly",
      "readonly"
    );
    item.parentElement.parentElement.children[0].children[0].style.backgroundColor =
      "#fff";
    item.parentElement.parentElement.children[1].children[0].style.backgroundColor =
      "#fff";
    item.parentElement.parentElement.children[2].children[0].style.backgroundColor =
      "#fff";
  }
}
