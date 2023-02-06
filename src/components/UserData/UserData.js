import "./UserData.css";

const UserData = (props) => {
  return (
    <div className="body">
      <p>
        {props.name} ({props.age} years old)
      </p>
    </div>
  );
};

export default UserData;
