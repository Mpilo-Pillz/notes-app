// Fetch existing todos from localStroage
const getSavedTodos = function () {
  const todosJSON = localStorage.getItem("todos");

  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
};

//save todos to local storage
const saveTodos = function (todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
};

//render todos based on filters
const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });

  document.querySelector(".todo-list").innerHTML = "";
  
  document.querySelector(".todo-list").appendChild(generateSummaryDOM(incompleteTodos));
//   document.querySelector(".todo-list").appendChild(summary);

  filteredTodos.forEach(function (todo) {
    document.querySelector(".todo-list").appendChild(generateTodoDOM(todo));
    // document.querySelector(".todo-list").appendChild(todoEl);
  });
};

//Get DOM ELEMENTS for an individual note
    const generateTodoDOM = function (todo) {
        const todoEl = document.createElement('div');
        const checkbox = document.createElement('input');
        const todoText = document.createElement('span');
        const removeButton = document.createElement('button');

        //Set up todo checkbox
        checkbox.setAttribute('type', 'checkbox');
        todoEl.appendChild(checkbox);

        //set up todotext
        todoText.textContent = todo.text;
        todoEl.appendChild(todoText);

        //set up the remove button
        removeButton.textContent = "x"
        todoEl.appendChild(removeButton);

        return todoEl;


    // const todoEl = document.createElement("p");
    // const button = document.createElement("button");
    // todoEl.textContent = todo.text;
    // button.textContent = "put it up"
    // return todoEl;
}

//Get the DOM elemnts for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement("h2");
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    return summary;
}


