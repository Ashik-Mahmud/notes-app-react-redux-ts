import { INotesAction } from "../type";

const NoteItem = ({
  note,
  handleDeleteNotes,
  handleEditNotes,
}: {
  note: INotesAction;
  handleDeleteNotes: (id: number) => void;
  handleEditNotes: (note: INotesAction) => void;
}) => {
  return (
    <li>
      <h4 className="title">{note.title}</h4>
      <p>{note.description}</p>
      <div className="action">
        <div>
          <button onClick={() => handleEditNotes(note)}>Edit</button>
          <button onClick={() => handleDeleteNotes(note.id)}>Delete</button>
        </div>
        <small>{note.createdAt}</small>
      </div>
    </li>
  );
};

export default NoteItem;
