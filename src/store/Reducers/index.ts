import { combineReducers } from "redux";
import { NotesReducer } from "./NoteReducer";

const allReducers = combineReducers({
  Notes: NotesReducer,
});

export default allReducers;
export type state = ReturnType<typeof allReducers>;
