import React from "react";

const ToDoItem = (props) => {
  const handleDelete = () => {
    props.deleteHandler(props.id);
  };

  return (
    <li id={props.id} onClick={handleDelete}>
      {props.children}
    </li>
  );
};

export default ToDoItem;
