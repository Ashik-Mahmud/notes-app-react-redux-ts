import { INotesAction } from "../../type";
import { NotesActionType as ActionType } from "../Action-types/NotesActionType";

interface IAddNote {
  type: ActionType.NOTE_ADD;
  payload: INotesAction;
}

interface INoteEdit {
  type: ActionType.NOTE_EDIT;
  payload: INotesAction;
}

interface IDeleteNote {
  type: ActionType.NOTE_DELETE;
  payload: number;
}

export type actionProps = IAddNote | INoteEdit | IDeleteNote;
