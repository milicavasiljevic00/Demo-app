import React from "react";
import { UsersListProps } from "./UsersListProps";
import "./UsersList.scss";
import UserCard from "../user-card/UserCard";

const UsersList: React.FC<UsersListProps> = ({ users, onEdit, onDelete }) => {
  return (
    <div className="users-list">
      {users.map((user, index) => (
        <UserCard
          key={index}
          userProp={user}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default UsersList;
