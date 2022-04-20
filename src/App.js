import React, { useState } from "react";
import DisplayEntries from "./Components/DisplayEntries/DisplayEntries";
import AddEntryForm from "./Components/AddEntry/AddEntryForm";

function App() {
  const [entries, setEntries] = useState([
    {
      wieght: 175,
      date: "11-23-2021",
    },
    {
      wieght: 275,
      date: "11-25-2021",
    },
  ]);

  function addNewEntry(entry) {
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);
  }

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
      <AddEntryForm addNewEntryProperty={addNewEntry} />
    </div>
  );
}

export default App;
