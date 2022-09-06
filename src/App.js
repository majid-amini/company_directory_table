'use strict'

const nameInput = document.querySelector('.company_name input')
const stateInput = document.querySelector('.company_state input')
const employeesInput = document.querySelector('.company_employees input')
const addButton = document.querySelector('.add_btn')
const table = document.querySelector('tbody')


addButton.addEventListener('click',(e) => {
    e.preventDefault()
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
    nameInput.value = ''
    stateInput.value = ''
    employeesInput.value = ''
})