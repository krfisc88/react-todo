import React, { useState } from "react";
import ToDoInput from "./components/ToDo/ToDoInput/ToDoInput";
import ToDoList from "./components/ToDo/ToDoList/ToDoList";

import "./styles.css";

export default function App() {
  const [listItems, setListItems] = useState([
    {
      id: Math.random().toString(),
      text: "Buy Toilet"
    },
    {
      id: Math.random().toString(),
      text: "Shave Horse"
    }
  ]);

  const onDeleteItem = (itemId) => {
    setListItems((prevToDos) => {
      let newList = prevToDos.filter((item) => item.id !== itemId);
      return newList;
    });
  };

  const onAddItem = (newItem) => {
    setListItems((prevToDos) => {
      let newList = [...prevToDos];
      newList.unshift({
        id: Math.random().toString(),
        text: newItem
      });
      return newList;
    });
  };

  let content = (
    <p>There's always something that needs doing - add some tasks!</p>
  );

  if (listItems.length > 0) {
    content = <ToDoList list={listItems} deleteListItem={onDeleteItem} />;
  }

  return (
    <div className="app">
      <ToDoInput addListItem={onAddItem} />
      {content}
    </div>
  );
}
