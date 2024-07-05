let taskDone = document.querySelectorAll('.done')
let itemDone = document.querySelectorAll('.to_do_form__content__item')
let addButton = document.getElementById('add_task')
let taskContent = document.getElementById('task_content')
let list = document.querySelector('.to_do_form__content');

addButton.addEventListener('click', function (evt) {
    evt.preventDefault()
    let task = document.createElement('div')
    task.classList.add('to_do_form__content__item')
    let taskInner = document.createElement('div')
    taskInner.classList.add('to_do_form__content__item--content')
    taskInner.textContent = taskContent.value
    let checkBox = document.createElement('input')
    checkBox.type = 'checkbox'
    checkBox.style.marginBottom = 'auto'
    task.appendChild(taskInner)
    task.appendChild(checkBox)
    checkBox.addEventListener('change', function () {
        task.style.display = 'none'
    })
    list.appendChild(task)
    taskContent.value = ''
})