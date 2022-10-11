import { useState, useEffect } from "react";

import CardList from "./Components/card-list/CardList";
import SearchBox from "./Components/search-box/SearchBox";
import "./App.css";

const App = () => {
  const [searchString, setSearchString] = useState("");
  const [structures, setStructures] = useState([]);
  const [filteredStructures, setFilteredStructures] = useState(structures);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setStructures(users));
  }, []);

  useEffect(() => {
    const newFilteredStructures = structures.filter((address) => {
      return address.name.toLocaleLowerCase().includes(searchString);
    });

    setFilteredStructures(newFilteredStructures);
  }, [structures, searchString]);

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchString(searchString);
  };

  return (
    <div className="App">
      <h1>Provincetown Structures</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search structures"
        className="structures-search-box"
      />
      <CardList structures={filteredStructures} />
    </div>
  );
};

export default App;
