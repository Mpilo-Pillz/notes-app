let todos = getSavedTodos();

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

 

renderTodos(todos, filters);

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
});

document.querySelector('#new-todo').addEventListener('submit', function(e) {
    e.preventDefault();
    todos.push({
        id: uuidv4(),
        text: e.target.elements.text.value,
        completed: false
    });
    saveTodos(todos);
    getSavedTodos(todos)
    renderTodos(todos, filters);
    e.target.elements.text.value = '';
});

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
});

document.querySelector('#delete-todo').addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.clear();
})



