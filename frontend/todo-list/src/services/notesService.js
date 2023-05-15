import { post, get, put } from "../singelton/axios/index";
import NotesAPI from "../utils/config";

// get contacts
export const getNotes = () => get(NotesAPI.getNote);

export const addNotes = (Notes) => post(NotesAPI.createNote, Notes);

export const updateNotes = (Notes) =>
  put(`${NotesAPI.updateNote}/${Notes.id}`, Notes);

export const deleteNote = (Notes) => put(`${NotesAPI.deleteNote}/${Notes.id}`);

// notes module services
