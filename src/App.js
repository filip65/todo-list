import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import List from "./components/List";
import Options from "./components/Options";

function App() {
  const [theme, setTheme] = useState("dark");
  const [items, setItems] = useState([
    { id: 1, text: "vyniest smetie", isDone: false },
    { id: 2, text: "popratat", isDone: true },
  ]);
  const [filterState, setFilterState] = useState("all");

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (id) => {
    const newItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(newItems);
  };

  const deleteAllItems = () => {
    setItems([]);
  };

  const checkItem = (id) => {
    setItems((items) => {
      return items.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    });
  };

  const filterItems = (option) => {
    switch (option) {
      case "all": {
        return [...items];
      }
      case "active": {
        return items.filter((item) => {
          return item.isDone === false;
        });
      }
      case "completed": {
        return items.filter((item) => {
          return item.isDone === true;
        });
      }
    }
  };

  return (
    <main className="main">
      <Home theme={theme} className="home" />
      <div className="container">
        <Header theme={theme} changeTheme={changeTheme} />
        <InputForm theme={theme} addItem={addItem} />
        <List
          theme={theme}
          items={filterItems(filterState)}
          deleteItem={deleteItem}
          checkItem={checkItem}
          deleteAllItems={deleteAllItems}
        />
        <Options
          theme={theme}
          filterState={filterState}
          setFilterState={setFilterState}
        />
      </div>
    </main>
  );
}

export default App;
