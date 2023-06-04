import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

export default function App() {
    const [monsters, setMonsters] = useState([]);
    const [searchField, setSearchField] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => setMonsters(users));
    }, []);

    function onSearchChange(event) {
        setSearchField(event.target.value.toLocaleLowerCase());
    }

    const filteredMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
        <div>
            <h1 className="app-title">Monsters Rolodex</h1>
            <SearchBox
                className="monsters-search-box"
                onChangeHandler={onSearchChange}
                placeholder="Search Monsters"
                searchBoxValue={searchField}
            />
            <CardList monsters={filteredMonsters} />
        </div>
    );
}
