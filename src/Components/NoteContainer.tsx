import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../store";
import { state } from "../store/Reducers";
import { INotesAction } from "../type";
import AddNote from "./AddNote";
import NoteHeader from "./NoteHeader";
import NotesList from "./NotesList";

export type editProps = {
  updateForm?: boolean;
  items?: INotesAction;
};

const NoteContainer = () => {
  const [show, setShow] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<editProps | {}>({});
  const dispatch = useDispatch();
  const notes: INotesAction[] = useSelector((state: state) => state.Notes);

  const { AddNoteAction, DeleteNoteAction } = bindActionCreators(
    ActionCreators,
    dispatch
  );

  /* for getting form data */
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  /* Set Data After Change Value on Input */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  /* Handle Add Notes  */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.title || !formData.description)
      return alert("Please fill all fields");
    AddNoteAction({
      id: notes.length + 1,
      title: formData.title,
      description: formData.description,
      createdAt: new Date().toLocaleString(),
    });
    setFormData({ title: "", description: "" });
    setShow(false);
  };

  /* Delete Notes Data */
  const handleDeleteNotes = (id: number) => {
    DeleteNoteAction(id);
  };

  /* Edit Notes Data */
  const handleEditNotes = (note: INotesAction) => {
    console.log("Edit", note);
    if (note) {
      setShow(true);
      setIsEdit({ updateForm: true, items: note });
    }
  };

  return (
    <div>
      {show && (
        <AddNote
          setShow={setShow}
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isEdit={isEdit}
        />
      )}
      <NoteHeader setShow={setShow} />
      <NotesList
        handleDeleteNotes={handleDeleteNotes}
        handleEditNotes={handleEditNotes}
      />
    </div>
  );
};

export default NoteContainer;
