import { post, get, put } from "../singelton/axios/index";
import * as url from "../helpers/url_helper";

// get contacts
export const getNotes = () => get(url.GET_CAMERAS);

export const addNotes = (Notes) => post(url.ADD_Notes, Notes);

export const updateNotes = (Notes) =>
  put(`${url.UPDATE_Notes}/${Notes.id}`, Notes);

export const ActivateUpdateNotes = (Notes) =>
  put(`${url.UPDATE_Notes}/${Notes.id}/activate`, Notes);

// notes module services
