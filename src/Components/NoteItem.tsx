import { INotesAction } from "../type";

const NoteItem = ({
  note,
  handleDeleteNotes,
}: {
  note: INotesAction;
  handleDeleteNotes: (id: number) => void;
}) => {
  return (
    <li>
      <h4 className="title">{note.title}</h4>
      <p>{note.description}</p>
      <div className="action">
        <div>
          <button>Edit</button>
          <button onClick={() => handleDeleteNotes(note.id)}>Delete</button>
        </div>
        <small>{note.createdAt}</small>
      </div>
    </li>
  );
};

export default NoteItem;
