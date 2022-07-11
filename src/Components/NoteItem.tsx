const NoteItem = () => {
  return (
    <li>
      <h4 className="title">Title Goes Here</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ipsa?</p>
      <div className="action">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </li>
  );
};

export default NoteItem;
