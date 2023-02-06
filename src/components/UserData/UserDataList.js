import "./UserDataList.css";
import UserData from "./UserData";

const UserDataList = (props) => {
  return (
    <div className="layout">
      <ul>
        {props.userDetails.map((userData) => {
          return (
            <UserData
              key={userData.id}
              name={userData.name}
              age={userData.age}
            ></UserData>
          );
        })}
      </ul>
    </div>
  );
};
export default UserDataList;
