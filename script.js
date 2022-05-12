const list = document.querySelector('.list');
const nav = document.querySelector('#new-btn');
const categoryDropdown = document.querySelector('.category-list');
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', addTodoItem);
newBtn.addEventListener('click', dropDown);



function addTodoItem() {
    //Create todo card and title
    const todoCard = document.createElement('div');
    const title = document.createElement('h2');
    title.innerText = 'Todo item...';

    todoCard.appendChild(title);
    todoCard.classList.add('todo-card');
    //Append todoCard to main worksheet
    list.appendChild(todoCard);

    // todoCard.addEventListener('click', edit);

    // function edit() {
    //     todoCard.setAttribute('contentEditable', 'true');
    // }
}