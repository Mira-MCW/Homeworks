//1. Создайте простую веб-страницу, где пользователь может вводить текст заметки. 
//Рядом с полем ввода должна быть кнопка "Сохранить", которая сохраняет введенный текст 
//в localStorage. Также добавьте блок, в котором будет отображаться последняя сохраненная заметка. 
//При обновлении страницы заметка должна оставаться на месте.


document.addEventListener("DOMContentLoaded", displayLastNote);

const noteInput = document.getElementById("noteInput");
const saveNoteButton = document.getElementById("saveNoteButton");
const lastNoteDiv = document.getElementById("lastNote");


function saveNoteToLocalStorage() {
  const enteredNote = noteInput.value;

  if (enteredNote.trim() !== "") {
    localStorage.setItem("lastNote", enteredNote);
    displayLastNote();
  }
}


function displayLastNote() {
  const lastNote = localStorage.getItem("lastNote");

  if (lastNote) {
    lastNoteDiv.textContent = `Your last Note: ${lastNote}`;
  } else {
    lastNoteDiv.textContent = "No saved Notes";
  }
}


saveNoteButton.addEventListener("click", saveNoteToLocalStorage);


document.addEventListener("DOMContentLoaded", displayLastNote);
