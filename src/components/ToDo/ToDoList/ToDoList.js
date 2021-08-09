import React from "react";
import ToDoItem from "./ToDoItem";
import styles from "./ToDoList.module.css";

const ToDoList = (props) => {
  return (
    <ul className={styles.list}>
      {props.list.map((item) => {
        return (
          <ToDoItem
            key={item.id}
            id={item.id}
            deleteHandler={props.deleteListItem}
          >
            {item.text}
          </ToDoItem>
        );
      })}
    </ul>
  );
};

export default ToDoList;
