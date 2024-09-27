function deleteNote(button){
    const notecontainer=button.closest('.note-container')
    notecontainer.remove();
}

//create notes

function createNotes() {
    const noteHTML = `
      <div class="note-container">
        <div class="note-content" contenteditable="true">New note</div>
        <div class="note-actions">
          <button class="btn btn-danger delete-note" onclick="deleteNote(this)">Delete</button>
        </div>
      </div>`;
  
    // Insert the new note before the create button
    document.querySelector('.create-notes').insertAdjacentHTML('beforebegin', noteHTML);

        // Select the newly created note-content and set focus
        const newNote = document.querySelector('.note-container:last-child .note-content');
        newNote.focus();
    
}

  