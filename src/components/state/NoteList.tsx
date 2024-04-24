import { useEffect, useRef, useState } from "react";

const NoteList: React.FC = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleAddNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNote("");
    setNotes((prevNotes) => [...prevNotes, note]); // string[]
    inputRef.current!.value // 100 %
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const handleDarg = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e);
  };

  useEffect(() => {
    // 1. optional chaining:
    // inputRef.current?.focus();

    // 2. type guard
    if (!inputRef.current) return;

    inputRef.current.focus();
    // ...
  }, []);

  return (
    <div>
      <h1>NoteList</h1>

      <ul>
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
      <div onDragStart={handleDarg}>Darage me!</div>
      <input ref={inputRef} type="text" value={note} onChange={handleChange} />
      <form onSubmit={handleAddNote}>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NoteList;
