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

// const p = document.querySelectorAll('p');
// let incompleteToDos = 0;


// notes.forEach(todo => {
//     if (!todo.completed) {
//         incompleteToDos++;
//     }
// })

// const incompleteToDosArr = notes.filter(todo => {
//     return !todo.completed
// })

// console.log(incompleteToDos);

// console.log(p);
// p.forEach(paragraph => {
//     // const sentence = paragraph.textContent.includes('and');
//     // console.log(sentence);

//     // if(sentence) {
//     //     paragraph.remove();
//     // }
//     paragraph.remove();
// });

// const header2 = document.createElement('h2');
// const paragraph = document.createElement('p');
// const body = document.querySelector('body')
// header2.textContent = 'List of things to Learn';
// // paragraph.textContent = `You have ${incompleteToDos} left to complete`;
// paragraph.textContent = `You have ${incompleteToDosArr.length} left to complete`;
// body.appendChild(header2);
// body.appendChild(paragraph);

// notes.forEach(note => {
//     console.log(note.title);
//   paragraph.textContent = note.title  
// })

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
});

const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector('body').appendChild(summary);

todos.forEach(function (todo) {
    const p = document.createElement('p');
    console.log(p);
    p.textContent = todo.text;
    document.querySelector('body').appendChild(p);
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

// const incompleteTodos = todos.filter(function (todo) {
//     return !todo.completed
// });

// console.log('incomplete todos-->', incompleteTodos);

document.querySelector('#add-todo').addEventListener('click', function(e) {
    e.target.textContent = 'Mpillz'
 console.log('Add todo');
});
