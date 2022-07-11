import { useState } from "react";
import AddNote from "./AddNote";
import NoteHeader from "./NoteHeader";
import NotesList from "./NotesList";

const NoteContainer = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div>
      {show && <AddNote setShow={setShow} />}
      <NoteHeader setShow={setShow} />
      <NotesList />
    </div>
  );
};

export default NoteContainer;
