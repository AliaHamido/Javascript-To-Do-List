let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('ToDoContainer');
let inputField = document.getElementById('inputField');
let addDateButton = document.getElementById('addDate');
let dateContainer = document.getElementById('DateContainer');


addToDoButton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = '';
  
    paragraph.addEventListener('click', function() {
      paragraph.style.textDecoration = 'line-through';
    });
  });

  addDateButton.addEventListener('click', function(){
    var dateInput = document.getElementById('dateInput'); // Selectați elementul input de tip dată
    var dateValue = dateInput.value; // Obțineți valoarea introdusă în câmpul de dată
    var dateParagraph = document.createElement('p');
  dateParagraph.innerText = "Due Date: " + dateValue;
  dateContainer.appendChild(dateParagraph);
  });
