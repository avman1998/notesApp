const textareaEle = document.querySelector("textarea");
const addbtn = document.querySelector("#add-btn");
const clearbtn = document.querySelector("#clear-btn");
let notesEle = document.querySelector("#notes");

let notesArray = [];
if (localStorage.getItem("myNotes")) {
  let items = localStorage.getItem("myNotes").split(",");
  if (items) {
    // items.length = 0;
    notesArray = items;
    render(notesArray);
  }
}
//Rendering Notes
addbtn.addEventListener("click", function () {
  if (textareaEle.value != "") {
    let checker = false;
    notesArray.unshift(textareaEle.value);
    localStorage.setItem("myNotes", notesArray);
    render(notesArray);
    textareaEle.value = "";
  }
});
//delete note
function deleteNote(e, index) {
  notesArray.splice(index, 1);
  localStorage.setItem("myNotes", notesArray);
  render(notesArray);
}
//editn note
function editNote(e, index) {
  textareaEle.value = notesArray[index];
  notesArray.splice(index, 1);
  localStorage.setItem("myNotes", notesArray);
  render(notesArray);
}
// render array of notes
function render(notes) {
  let listItems = "";
  for (let i = 0; i < notes.length; i++) {
    listItems += `<div class="note">
    <div class="orderandNote">
  <p class="orderNo">${i + 1}.</p>
  <p>${notes[i]}</p>
  </div>
  <div class="note-btns">
  
  <button onClick="editNote(this,${i})">✏️</button>
  <button onClick="deleteNote(this,${i})">❌</button>
  </div>
  </div>`;
  }
  notesEle.innerHTML = listItems;
}
clearbtn.addEventListener("click", function () {
  notesArray = [];
  localStorage.setItem("myNotes", notesArray);
  render(notesArray);
});
