import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import List from "./components/List";
import Options from "./components/Options";

function App() {
  const [theme, setTheme] = useState("dark");
  const [items, setItems] = useState([]);
  const [filterState, setFilterState] = useState("all");

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const addItem = (item) => {
    if (item.text.trim()) {
      setItems([...items, item]);
    }
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
    if (option === "all") {
      return [...items];
    }
    if (option === "active") {
      return items.filter((item) => {
        return item.isDone === false;
      });
    }

    if (option === "completed") {
      return items.filter((item) => {
        return item.isDone === true;
      });
    }
  };

  return (
    <main className={`main main-${theme}`}>
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
