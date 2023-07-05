import { useEffect, useState } from "react";
import CardList from "./components/cardList";
import SearchBox from "./components/searchBox";
import "./App.css";
const App = () => {
  const [monster, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setMonsters(data))
      .catch((err) => console.log(err));
  }, []);

  const filiteredMonsters = monster.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });
  const onSearchChange = (e) => {
    console.log(e.target.value);
    const searchField = e.target.value.toLowerCase();
    setSearchField(searchField);
  };
  return (
    <div>
      <h1 className="appTitle">Monster Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} />
      <CardList monster={filiteredMonsters} />
    </div>
  );
};

export default App;
