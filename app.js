const addNew = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

//  ADDING NEW TODOS
addNew.addEventListener('submit', (e) => {

    e.preventDefault();
    const todo = addNew.add.value.trim();

    const template = (todo) => {
        const html = ` <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="fa-solid fa-trash-can delete"></i>
    </li>
    `;

        list.innerHTML += html;

    }
    if (todo.length > 0) {
        template(todo);
        addNew.reset();
    }
});
//  delete todos:

list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});
