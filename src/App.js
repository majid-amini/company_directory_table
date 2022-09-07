'use strict'

//selectors
const nameInput = document.querySelector('.company_name input')
const stateInput = document.querySelector('.company_state input')
const employeesInput = document.querySelector('.company_employees input')
const addButton = document.querySelector('.add_btn')
const table = document.querySelector('tbody')
const deleteBtn = document.querySelector('.fa-trash')

//Event Listeners
addButton.addEventListener('click',addItem)
table.addEventListener('click',deleteEdit)

//Functions
function addItem (event)  {
        //prevnt form from submitting
         event.preventDefault()
        //appending to table tag
        table.innerHTML += `
        <tr class="bg-white border-b">
        <td class="p-1">${nameInput.value}</td>
        <td>${stateInput.value}</td>
        <td>${employeesInput.value}</td>
        <td class="flex items-center gap-2">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
        </td>
        </tr>
        `
        //clear input value
        nameInput.value = ''
        stateInput.value = ''
        employeesInput.value = ''
}

function deleteEdit (e) {
    const item = e.target
    //delete item
    if (item.classList[1] === 'fa-trash') {
        item.parentElement.parentElement.remove()
    }
}
// addButton.addEventListener('click',(e) => {
//     e.preventDefault()
//     table.innerHTML += `
//     <tr class="bg-white border-b">
//     <td class="p-1">${nameInput.value}</td>
//     <td>${stateInput.value}</td>
//     <td>${employeesInput.value}</td>
//     <td class="flex items-center gap-2">
//         <i class="fa-solid fa-pen-to-square"></i>
//         <i class="fa-solid fa-trash"></i>
//     </td>
//     </tr>
//     `
//     nameInput.value = ''
//     stateInput.value = ''
//     employeesInput.value = ''
// })