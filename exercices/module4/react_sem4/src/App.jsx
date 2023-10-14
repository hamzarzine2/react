import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Person from "./Component/Persons";
import personService from "./services/Person";
const App = () => {
  useEffect(() => {
    console.log("bimbim");
    personService.getAll().then(liste => {
      setPersons(liste);
    });
  }, []);

  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPersons = (e) => {
    e.preventDefault();
    console.log("addPersons");
    personService
    .addOne({ name: newName, number: newNumber })
    .then(value => {
    setPersons([...persons, value]);
    setNewName("");
    setNewNumber("");
    })
  };

  const onChange = (e) => {
    setNewName(e.target.value);
  };

  const changeNumber = (e) => {
    setNewNumber(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPersons}>
        <div>
          name:
          <input value={newName} onChange={onChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={changeNumber} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Person persons={persons} />
    </div>
  );
};

export default App;
