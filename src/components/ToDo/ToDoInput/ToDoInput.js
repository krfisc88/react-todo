import React, { useState } from "react";
import Button from "../../UI/Button/Button";

import styles from "./ToDoInput.module.css";

const ToDoInput = (props) => {
  const [userInputValue, setUserInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const onChangeHandler = (event) => {
    setIsValid(true);
    setUserInputValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (userInputValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.addListItem(userInputValue);
    setUserInputValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div
        className={`${styles["form-control"]} ${
          !isValid ? styles.invalid : ""
        }`}
      >
        <label htmlFor="userInput">To Do It</label>
        <input
          type="text"
          id="userInput"
          onChange={onChangeHandler}
          value={userInputValue}
          autoFocus
        />
      </div>
      <Button type="submit">Add Item</Button>
    </form>
  );
};

export default ToDoInput;
