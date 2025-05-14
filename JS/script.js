const notesContainer = document.getElementById('notes-container');
const noteInput = document.getElementById('note-content');
const addNoteForm = document.getElementById('add-note-container');
const searchInput = document.getElementById('search-input');
const exportBtn = document.getElementById('export-notes')

const showNotes = () => {
    cleanNotes();
    getNotes().forEach(note => {
        const noteElement = createNote(note.id, note.content, note.fixed);

        notesContainer.appendChild(noteElement);
    });
}

const cleanNotes = () => {
    notesContainer.replaceChildren([]);
}

const addNote = () => {
    const notes = getNotes();

    const noteObject = {
        id: generateId(),
        content: noteInput.value,
        fixed: false,
    };

    const noteElement = createNote(noteObject.id, noteObject.content);
    notesContainer.appendChild(noteElement);
    notes.push(noteObject);

    saveNotes(notes);

    noteInput.value = '';
}

const generateId = () => {
    return Math.floor(Math.random() * 5000);
}

const createNote = (id, content, fixed) => {
    const element = document.createElement('div');
    element.classList.add('note');

    const textArea = document.createElement('textarea');
    textArea.value = content;
    textArea.placeholder = 'Add some text...';
    element.appendChild(textArea);

    textArea.addEventListener('keyup', (e) => {
        const noteContent = e.target.value;

        updateNote(id, noteContent);
    })

    const pinIcon = document.createElement('i');
    pinIcon.classList.add(...["bi", "bi-pin"]);
    element.appendChild(pinIcon);

    pinIcon.addEventListener('click', () => {
        toggleFixNote(id);
    })

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add(...["bi", "bi-x-lg"]);
    element.appendChild(deleteIcon);

    deleteIcon.addEventListener('click', () => {
        deleteNote(id, element);
    })

    const duplicateIcon = document.createElement('i');
    duplicateIcon.classList.add(...["bi", "bi-file-earmark-plus"]);
    element.appendChild(duplicateIcon);

    duplicateIcon.addEventListener('click', () => {
        copyNote(id);
    })

    if (fixed) {
        element.classList.add('fixed');
        pinIcon.className = "bi bi-pin-fill";
    }

    return element;
}

const deleteNote = (id, element) => {
    const notes = getNotes().filter(note => note.id !== id);
    saveNotes(notes);

    notesContainer.removeChild(element);
}

const copyNote = (id) => {
    const notes = getNotes();
    const targetNote = notes.filter(note => note.id === id)[0];

    const noteObject = {
        id: generateId(),
        content: targetNote.content,
        fixed: false,
    };

    const noteElement = createNote(noteObject.id, noteObject.content, noteObject.fixed);
    notesContainer.appendChild(noteElement);

    notes.push(noteObject);
    saveNotes(notes)
}

const updateNote = (id, newContent) => {
    const notes = getNotes();
    const targetNote = notes.filter(note => note.id === id)[0];

    targetNote.content = newContent;

    saveNotes(notes);
}

const toggleFixNote = (id) => {
    const notes = getNotes();

    const targetNote = notes.filter(note => note.id === id)[0];

    targetNote.fixed = !targetNote.fixed;

    saveNotes(notes);
    showNotes();
}

const getNotes = () => {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");

    const orderedNotes = notes.sort((a, b) => a.fixed > b.fixed ? -1 : 1);

    return orderedNotes;
}

const saveNotes = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes));
}

const searchNotes = (search) => {
    const searchResults = getNotes().filter(note => note.content.includes(search));

    if (search !== '') {
        cleanNotes();
        searchResults.forEach(note => {
            const noteElement = createNote(note.id, note.content, note.fixed)
            notesContainer.appendChild(noteElement);
        })

        return;
    }

    cleanNotes();
    showNotes();
}

const exportData = () => {
    const notes = getNotes();

    const csvString = [
        ["ID", "Content", "Fixed?"],
        ...notes.map((note) => [note.id, note.content, note.fixed])
    ].map(e => e.join(','))
        .join('\n');

    const element = document.createElement("a");

    element.href = "data:text/csv;charset=utf-8," + encodeURI(csvString);

    element.target = '_blank';
    element.download = "notes.csv";
    element.click();
}

addNoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addNote();
})

searchInput.addEventListener('keyup', (e) => {
    const search = e.target.value;

    searchNotes(search);
})

exportBtn.addEventListener('click', () => {
    exportData();
})

showNotes();