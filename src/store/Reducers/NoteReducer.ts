import { INotesAction } from "../../type";
import { NotesActionType as ActionType } from "../Action-types/NotesActionType";
import { actionProps } from "../Actions/NoteAction";

const initState = [
  {
    id: 1,
    title: "Note 1",
    description: "Description 1",
    createdAt: "2020-01-01",
  },
];

export const NotesReducer = (
  state: INotesAction[] = initState,
  action: actionProps
) => {
  switch (action.type) {
    case ActionType.NOTE_ADD:
      return [...state, action.payload];

    case ActionType.NOTE_EDIT:
      const allNotesExceptEdited = state.filter(
        (note) => note.id !== action.payload.id
      );
      const editNoteItem = state.find((item) => item.id === action.payload.id);
      if (editNoteItem) {
        editNoteItem.title = action.payload.title;
        editNoteItem.description = action.payload.description;
        editNoteItem.createdAt = action.payload.createdAt;
      }
      return [...allNotesExceptEdited, editNoteItem];

    case ActionType.NOTE_DELETE:
      const allNotesExceptDeleted = state.filter(
        (note) => note.id !== action.payload
      );
      return allNotesExceptDeleted;
    default:
      return state;
  }
};
