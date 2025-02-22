import { useState } from "react";
import FilterNames from "./components/FilterNames";
import AddName from "./components/AddName";
import DisplayContacts from "./components/DisplayContacts";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const addName = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      return alert(`${newName} is already added to phonebook`);
    }

    const nameObj = {
      name: newName,
      number: newNumber,
    };

    setPersons(persons.concat(nameObj));
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <FilterNames setFilter={setFilter} />
      <h2>add a new</h2>
      <AddName
        newName={newName}
        addName={addName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <DisplayContacts persons={persons} filter={filter} />
    </div>
  );
};

export default App;
