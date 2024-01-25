import React from "react";
import { UserCardProps } from "./UserCardProps";
import { useModalContext } from "../../../components/popup/modal-context/ModalContext";
import { useUserContext } from "../../../user-context/UserContextProvider";
import EditUserForm from "./user-options/EditUserForm";
import DeleteUserForm from "./user-options/DeleteUserForm";

const UserCard: React.FC<UserCardProps> = ({ userProp, onEdit, onDelete }) => {
  const { open } = useModalContext();
  const { user } = useUserContext();

  function handleOpenEdit() {
    open(<EditUserForm user={userProp} onEdit={onEdit}></EditUserForm>);
  }

  function handleOpenDelete() {
    open(<DeleteUserForm user={userProp} onDelete={onDelete}></DeleteUserForm>);
  }

  return (
    <div className="product-card">
      <div className="product-info">
        <h4 className="caption-txt">{userProp.username}</h4>
        <div className="price-section">
          <p>
            {userProp.firstName} {userProp.lastName}
          </p>
          <p>{userProp.role.role}</p>
        </div>
      </div>
      <div className="product-options">
        <button
          className={
            user?.role === "ADMINISTRATOR"
              ? "product-option-btn edit"
              : "product-option-btn only-edit"
          }
          onClick={handleOpenEdit}
        >
          EDIT
        </button>
        {user?.role === "ADMINISTRATOR" && (
          <button
            className="product-option-btn delete"
            onClick={handleOpenDelete}
          >
            DELETE
          </button>
        )}
      </div>
    </div>
  );
};

export default UserCard;
