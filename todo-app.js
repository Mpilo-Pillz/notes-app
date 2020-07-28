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
    searchText: '',
    hideCompleted: false
}

// const renderTodos = function (todos, filters) {
//     const filteredTodos = todos.filter(function (todo) {
//         return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
//     });

    // const renderTodos = function (todos, filters) {
    //     const filteredTodos = todos.filter(function (todo) {
    //         if (filters.hideCompleted) {
    //             return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    //         } else {
    //             return todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && !todo.completed;
    //         }
    //     });

    // const renderTodos = function (todos, filters) {
    // let filteredTodos = todos.filter(function (todo) {
    //     return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    // });

    // filteredTodos = filteredTodos.filter(function (todo) {
    //     return !filters.hideCompleted || !todo.completed
    // })

    const renderTodos = function (todos, filters) {
        const filteredTodos = todos.filter(function (todo) {
            const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
            const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
            
            return searchTextMatch && hideCompletedMatch; 
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
}

renderTodos(todos, filters);

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
});

document.querySelector('#new-todo').addEventListener('submit', function(e) {
    e.preventDefault();
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    });
    renderTodos(todos, filters);
    e.target.elements.text.value = '';
});

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
})



