import AddNote from "./AddNote";
import NoteHeader from "./NoteHeader";
import NotesList from "./NotesList";

const NoteContainer = () => {
  return (
    <div>
      <AddNote />
      <NoteHeader />
      <NotesList />
    </div>
  );
};

export default NoteContainer;
