import { useState } from 'react'
import './App.css'

export function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState(['Aivin', 'Alvin', 'Peter', 'Grace', 'James']);
  const [done, setDone] = useState([false, false, false, false, false]);

  function handleAddName(input: any) {
    if (input == "") {
      return;
    }
    const copy = [...list];
    const copy2 = [...done];
    copy.push(input);
    copy2.push(false);
    setList(copy);
    setDone(copy2);
  }
  function handleDelete(index: number) {
    const copy = [...list];
    const copy2 = [...done];
    copy.splice(index, 1);
    copy2.splice(index, 1);
    setList(copy);
    setDone(copy2);
  }
  function handleMarkDone(index: number) {
    const copy = [...done];
    copy[index] = true;
    setDone(copy);
  }
  function handleMarkUndone(index: number) {
    const copy = [...done];
    copy[index] = false;
    setDone(copy);
  }

  return (
    <div>
      <h1>To Do List</h1>
      {list.map((value, index) => {
        return (
          <>{done[index] ?
          <s>{value} <button onClick={() => handleDelete(index)}>Delete</button> <button onClick={() => handleMarkUndone(index)}>Mark Undone</button></s> :
          <p>{value} <button onClick={() => handleDelete(index)}>Delete</button> <button onClick={() => handleMarkDone(index)}>Mark Done</button></p>
          }
          <p></p>
          </>
        )
      })}
      <input type="text" onChange={(event) => setInput(event.target.value)}/>
      <button onClick={() => handleAddName(input)}>Add</button>
    </div>
  )
}

