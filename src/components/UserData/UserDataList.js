import styles from "./UserDataList.module.css";
import UserData from "./UserData";
import Card from "../UI/Card";

const UserDataList = (props) => {
  return (
    <Card className={styles.users}>
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
    </Card>
  );
};
export default UserDataList;
