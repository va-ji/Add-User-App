import "./UserDetails.css";
import AddUser from "../User/AddUser";
import UserDataList from "../UserData/UserDataList";
import { useState } from "react";

const UserDetails = () => {
  const [userDetails, setUserDetail] = useState([]);
  const getUserDetailHandler = (details) => {
    setUserDetail((previousDetails) => [
      ...previousDetails,
      { ...details, id: Math.random().toString() },
    ]);
  };
  return (
    <div className="container">
      <AddUser onGetUserDetails={getUserDetailHandler}></AddUser>
      <UserDataList userDetails={userDetails}></UserDataList>
    </div>
  );
};

export default UserDetails;
