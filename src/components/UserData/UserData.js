import "./UserData.css";

const UserData = (props) => {
  return (
    <li className="users-list">
      {props.name} ({props.age} years old)
    </li>
  );
};

export default UserData;
