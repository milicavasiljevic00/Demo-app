import React, { useEffect, useState } from "react";
import { UserHttp } from "../../api/http-services/users.http";
import { UserForAdmin } from "../../models/entities/UserForAdmin";
import { useModalContext } from "../../components/popup/modal-context/ModalContext";
import AddUsers from "./AddUsers";
import { Button } from "@mui/material";
import UsersList from "./users-list/UsersList";

const AdminUsers = () => {
  const [users, setUsers] = useState<UserForAdmin[]>([]);

  const userHttp = new UserHttp();
  const { open } = useModalContext();

  function handleOpen() {
    open(<AddUsers onAdd={addUser} />);
  }

  const fetchUsers = async () => {
    try {
      const response = await userHttp.getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = (id: number) => {
    const us = users.filter((p) => p.id !== id);
    setUsers(us);
  };

  const addUser = (newUser: UserForAdmin) => {
    setUsers([...users, newUser]);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="page-container">
      <div className="products-container">
        <h1 className="caption">All users</h1>
        <Button
          onClick={handleOpen}
          style={{ backgroundColor: "rgb(214, 129, 1)", zIndex: "0" }}
          className="add-btn"
          variant="contained"
          color="primary"
        >
          Add
        </Button>
        <UsersList users={users} onEdit={fetchUsers} onDelete={deleteUser} />
      </div>
    </div>
  );
};

export default AdminUsers;
