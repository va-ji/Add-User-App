import "./AddUser.css";
import { useState } from "react";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const userNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const userDetails = {
      name: enteredName,
      age: enteredAge,
    };
    console.log(userDetails);
    props.onGetUserDetails(userDetails);
    setEnteredAge("");
    setEnteredName("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredName}
          onChange={userNameChangeHandler}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={enteredAge}
        ></input>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default AddUser;
