import { useState, useEffect } from "react";
import axios from "axios";
import FilterNames from "./components/FilterNames";
import AddName from "./components/AddName";
import DisplayContacts from "./components/DisplayContacts";
import services from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    services.getAll().then((initPersons) => setPersons(initPersons));
  }, []);

  const addName = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      const result = window.confirm(
        `${newName} is already added to the phonebook. Update the number to ${newNumber}?`
      );
      if (result) {
        const oldObj = persons.find((p) => p.name === newName);
        const changed = { ...oldObj, number: newNumber };
        services
          .updateContact(changed.id, changed)
          .then((updatedPerson) => {
            setPersons(
              persons.map((p) =>
                p.id === updatedPerson.id ? updatedPerson : p
              )
            );
            setNewName("");
            setNewNumber("");
          })
          .catch((e) => console.error(e));
      }

      return;
    }

    const nameObj = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    };

    services
      .create(nameObj)
      .then((person) => {
        setPersons(persons.concat(person));
        setNewName("");
        setNewNumber("");
      })
      .catch((e) => console.error(e));
  };

  const deleteFunc = (id) => {
    const result = window.confirm("Do you want to delete this contact?");

    if (result) {
      services
        .deleteContact(id)
        .then(() => {
          setPersons(persons.filter((p) => p.id !== id));
        })
        .catch((e) => console.error(e));
    }
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
      <DisplayContacts
        persons={persons}
        filter={filter}
        deleteFn={deleteFunc}
      />
    </div>
  );
};

export default App;
