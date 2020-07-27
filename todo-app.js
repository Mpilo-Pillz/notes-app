const todos = [
    {
        text: 'HTML and CSS',
        completed: true
    },
    {
        text: 'MongoDB',
        completed: false
    },
    {
        text: 'JavaScript',
        completed: false
    },
    {
        text: 'TypeScript',
        completed: false
    },
    {
        text: 'Advanced CSS and SASS',
        completed: true
    },

];

const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    });

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    });

    document.querySelector('.todo-list').innerHTML = '';

    const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector('.todo-list').appendChild(summary);

    filteredTodos.forEach(function (todo) {
        const todoEl = document.createElement('p');
        todoEl.textContent = todo.text;
        document.querySelector('.todo-list').appendChild(todoEl);
    })
    console.log(filteredTodos);
}

renderTodos(todos, filters);

// const incompleteTodos = todos.filter(function (todo) {
//     return !todo.completed
// });

// console.log('incomplete todos-->', incompleteTodos);

document.querySelector('#add-todo').addEventListener('click', function(e) {
    e.target.textContent = 'Mpillz'
 console.log('Add todo');
});

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
    console.log(e.target.value);
});

// const summary = document.createElement('h2');
// summary.textContent = `You have ${incompleteTodos.length} todos left`;
// document.querySelector('.todo-list').appendChild(summary);

// todos.forEach(function (todo) {
//     const p = document.createElement('p');
//     console.log(p);
//     p.textContent = todo.text;
//     document.querySelector('.todo-list').appendChild(p);
// });

