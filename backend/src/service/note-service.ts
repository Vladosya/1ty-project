import db from "../db";

import generatePassword from "../helpers/generate-password";
import generateTime from "../helpers/generate-time";
import modifyStorage from "../helpers/mega-storage";

import {INoteCreate, INoteGet} from "../types/service/note-service";

class NoteService {
    async createNote(message: string): Promise<INoteCreate> {
        const generatedNoteId: string = generatePassword(5, 109);
        const newNote = await db.query("INSERT INTO notes (note_id, note_message, date_create) VALUES ($1, $2, $3) RETURNING *", [generatedNoteId, message, new Date()]);
        await modifyStorage(message, generateTime);
        return newNote.rows[0];
    }

    async readNoteById(id: string) {
        await db.query("UPDATE notes SET date_read = $1, is_readed = $2 WHERE note_id = $3", [new Date(), true, id]);
    }

    async getNoteById(id: string): Promise<INoteGet[]> {
        const note = await db.query("SELECT * FROM notes WHERE note_id = $1", [id]);
        return note.rows;
    }

    async deleteNoteById(id: string) {
        await db.query("DELETE FROM notes WHERE note_id = $1", [id]);
    }
}

export default new NoteService();
