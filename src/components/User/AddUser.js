import "./AddUser.css";
import Card from "../UI/Card";

const AddUser = () => {
  const submitHandler = () => {};
  return (
    <form onSubmit={submitHandler}>
      <div className="container">
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input id="username"></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age"></input>
          <button type="submit">AddUser</button>
        </div>
      </div>
    </form>
  );
};

export default AddUser;
