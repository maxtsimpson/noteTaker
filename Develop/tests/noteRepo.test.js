const noteRepo = require("../db/noteRepo");
// const Note = require("../Models/note");

// test("Can instantiate noteRepo instance", () => {
//     const repo = new noteRepo();
//     expect(typeof (repo)).toBe("object");
// });

// test("Can add note", () => {
//     const repo = new noteRepo();
//     const note = new Note("dinner","nachos and a beer");
//     const result = repo.addNote(note);
//     expect(typeof (result)).toBe("object");
// });

// test("Can get a new id", () => {
//     const repo = new noteRepo();
//     const id = repo.getNextId();
//     expect(typeof (id)).toBe("number");
// });

// test("Can store notes", () => {
//     const repo = new noteRepo();
//     const note = new Note("dinner","nachos and a beer");
//     const note2 = new Note("breakfast","leftover nachos and a coffee");
//     repo.addNote(note);
//     repo.addNote(note2);
//     repo.storeNotes();
//     expect();
// });

test("Can get notes", () => {
    const repo = new noteRepo();
    repo.initRepo()
    .then( () => repo.getNotesArrayFromMongo())
    .then( (notes) => {
        expect(Array.isArray(notes))
    });
});

// test("can create notes", () => {
//     const repo = new noteRepo();
//     const note = repo.createNote("dinner","nachos and a beer");
//     expect(typeof (note)).toBe("object");
// });