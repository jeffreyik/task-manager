const list = document.querySelector('.list');
const body = document.querySelector('body');
const categoryDropdown = document.querySelector('.category-list');
const addBtn = document.querySelector('.add-btn');

// Category buttons
// const workBtn = document.querySelector('work-btn');
// const personalBtn = document.querySelector('personal-btn');
// const travelBtn = document.querySelector('travel-btn');


addBtn.addEventListener('click', addTodoItem);
body.addEventListener('click', dropDown);
categoryDropdown.addEventListener('click', addNew);

function addNew(e) {
    let target = e.target;
    if (target.classList.contains("work-btn")) {
        createWork();
    } else if (target.classList.contains("personal-btn")) {
        createPersonal();
    } else if (target.classList.contains("travel-btn")) {
        createTravel();
    }
}


// function createWork() {
//     const workWrapper = document.createElement('div');
//     workWrapper.classList.add('list');
//     workWrapper.classList.add('work');

//     const categoryLabel = document.createElement('div');
//     categoryLabel.classList.add('category');
//     categoryLabel.innerHTML = '<h1>Work</h1>';
//     const btn = document.createElement('button');
//     btn.classList.add("add-btn");

//     categoryLabel.appendChild(btn);
//     workWrapper.appendChild(categoryLabel);
// }


// function for new dropdown
function dropDown(e) {
    let target = e.target;
    if (target.classList.contains("new-btn")) {
        categoryDropdown.style.display = "flex";
    } else {
        categoryDropdown.style.display = "none";
    }
}



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