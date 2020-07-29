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

const removeTodo = function (id) {
  const todoIndex = todos.findIndex(function (todo){
    return todo.id === id;
  })

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
}

//TOggle completed value for given todo
const toggleTodo = function(id) {
  const todo = todos.find(function(todo) {
    return todo.id === id;
  })

  if (todo !== undefined) {
    todo.completed = !todo.completed;
  }
}

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
        checkbox.checked = todo.completed;
        todoEl.appendChild(checkbox);

        checkbox.addEventListener('change', function() {
          toggleTodo(todo.id);
          saveTodos(todos);
          renderTodos(todos, filters);
        })

        //set up todotext
        todoText.textContent = todo.text;
        todoEl.appendChild(todoText);

        //set up the remove button
        removeButton.textContent = "x"
        todoEl.appendChild(removeButton);

        removeButton.addEventListener('click', function() {
          removeTodo(todo.id);
          saveTodos(todos);
          renderTodos(todos, filters);
        })

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


