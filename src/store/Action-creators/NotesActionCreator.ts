import { Dispatch } from "redux";
import { INotesAction } from "../../type";
import { NotesActionType as ActionType } from "../Action-types/NotesActionType";
import { actionProps } from "../Actions/NoteAction";

export const AddNoteAction = (notes: INotesAction) => {
  return (dispatch: Dispatch<actionProps>) => {
    dispatch({
      type: ActionType.NOTE_ADD,
      payload: notes,
    });
  };
};

export const EditNoteAction = (notes: INotesAction) => {
  return (dispatch: Dispatch<actionProps>) => {
    dispatch({
      type: ActionType.NOTE_EDIT,
      payload: notes,
    });
  };
};

export const DeleteNoteAction = (deleteId: number) => {
  return (dispatch: Dispatch<actionProps>) => {
    dispatch({
      type: ActionType.NOTE_DELETE,
      payload: deleteId,
    });
  };
};
