import React, { useState } from "react";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import { useDispatch } from "react-redux";
import { removeFromUsers } from "../../context/usersSlice";
import { MdOutlineEdit } from "react-icons/md";
function Users({ data }) {
  const dispatch = useDispatch();

  const [editableUser, setEditableUser] = useState(null);
  const [editedUserData, setEditedUserData] = useState({});

  const handleEditClick = (user) => {
    setEditableUser(user);
    setEditedUserData({
      name: user.name,
      profession: user.profession,
      age: user.age,
    });
  };

  const handleInputChange = (e, field) => {
    setEditedUserData((prevData) => ({
      ...prevData,
      [field]: e.target.value,
    }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      saveChanges();
    }
  };

  const saveChanges = () => {
    setEditableUser(null);
  };

  return (
    <div className="users__wrapper">
      {data?.map((user) => (
        <div key={user.id} className="users__card">
          {editableUser === user ? (
            <>
              <input
                type="text"
                value={editedUserData.name}
                onChange={(e) => handleInputChange(e, "name")}
                onKeyDown={handleKeyDown}
              />
              <input
                type="text"
                value={editedUserData.profession}
                onChange={(e) => handleInputChange(e, "profession")}
                onKeyDown={handleKeyDown}
              />
              <input
                type="text"
                value={editedUserData.age}
                onChange={(e) => handleInputChange(e, "age")}
                onKeyDown={handleKeyDown}
              />
              <button onClick={saveChanges}>Save</button>
            </>
          ) : (
            <>
              <img src={user.gender === "male" ? male : female} alt="" />
              <h2>{editedUserData.name || user.name}</h2>
              <hr />
              <p>{editedUserData.profession || user.profession}</p>
              <hr />
              <p>{editedUserData.age || user.age} years old</p>
              <div className="control">
                {" "}
                <button onClick={() => dispatch(removeFromUsers(user))}>
                  Remove
                </button>
                <button className="edit" onClick={() => handleEditClick(user)}>
                  <MdOutlineEdit />
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Users;
