import React, { useEffect, useState } from "react";
import { EditUserFormProps } from "./EditUserFormProps";
import { Button, MenuItem, TextField } from "@mui/material";
import { UserForAdmin } from "../../../../models/entities/UserForAdmin";
import { UserHttp } from "../../../../api/http-services/users.http";
import { useModalContext } from "../../../../components/popup/modal-context/ModalContext";
import { UserRoles } from "../../../../routes/UserRoles";
import { RoleHttp } from "../../../../api/http-services/roles.http";
import { Role } from "../../../../models/entities/Role";
import "./EditUserForm.scss";

const EditUserForm: React.FC<EditUserFormProps> = ({ user, onEdit }) => {
  const [userInfo, setUserInfo] = useState<UserForAdmin>(user);
  const [roles, setRoles] = useState<Role[]>();

  const userHttp = new UserHttp();
  const roleHttp = new RoleHttp();

  const { close } = useModalContext();

  const handleChange = (partialData: Partial<UserForAdmin>) => {
    setUserInfo({ ...userInfo, ...partialData });
  };

  const handleRoleChange = (partialData: Partial<Role>) => {
    const selectedRole = roles?.find((r) => r.role === partialData.role);

    if (selectedRole) {
      setUserInfo({
        ...userInfo,
        role: { id: selectedRole.id, role: selectedRole.role },
      });
    }
  };

  const handleSubmit = async () => {
    try {
      await userHttp.editUser(userInfo.id, userInfo);
      onEdit();
      close();
    } catch (error) {
      console.log(error);
      alert("Error");
    }
  };

  const fetchRoles = async () => {
    try {
      const response = await roleHttp.getRoles();
      setRoles(response.data);
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };

  useEffect(() => {
    fetchRoles();
    console.log(user.id);
  }, []);

  return (
    <div style={{ padding: "15px" }}>
      <TextField
        name="name"
        defaultValue={userInfo.username}
        onChange={(e) => handleChange({ username: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        name="firstName"
        defaultValue={userInfo.firstName}
        onChange={(e) => handleChange({ firstName: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        name="lastName"
        defaultValue={userInfo.lastName}
        onChange={(e) => handleChange({ lastName: e.target.value })}
        fullWidth
        margin="normal"
      />
      <select
        className="edit-select-field"
        value={userInfo.role?.role || ""}
        onChange={(e) =>
          handleRoleChange({ role: e.target.value as keyof typeof UserRoles })
        }
        style={{ marginTop: "20px" }}
      >
        <option value="" disabled className="select-label">
          Select a role
        </option>
        {roles &&
          roles.map((role) => (
            <option
              key={role.id}
              value={role.role}
              selected={userInfo.role?.role === role.role}
            >
              {role.role}
            </option>
          ))}
      </select>
      <Button
        onClick={handleSubmit}
        style={{
          backgroundColor: "rgb(214, 129, 1)",
          marginTop: "20px",
          marginBottom: "20px",
        }}
        fullWidth
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </div>
  );
};

export default EditUserForm;
