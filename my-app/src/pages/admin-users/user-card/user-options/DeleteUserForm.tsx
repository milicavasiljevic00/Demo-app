import React from 'react'
import { DeleteUserFormProps } from './DeleteUserFormProps'
import { UserHttp } from '../../../../api/http-services/users.http'
import { useModalContext } from '../../../../components/popup/modal-context/ModalContext'
import { Button } from '@mui/material'

const DeleteUserForm: React.FC<DeleteUserFormProps> = ({ user, onDelete }) => {
    const userHttp = new UserHttp()

    const { close } = useModalContext()

    const deleteUser = async () => {
        try {
            await userHttp.deleteUser(user.id);
            onDelete(user.id);
            close();
        }
        catch (error) {
            console.log(error);
            alert("Error");
        }
    }

    return (
        <div>
            <p>Are you sure you want to delete {user.username}?</p>
            <Button onClick={deleteUser} style={{ backgroundColor: 'rgb(214, 129, 1)', marginLeft: '90px', marginTop: '20px', marginBottom: '20px', marginRight: '5px' }} variant="contained" color="primary">
                Yes
            </Button>
            <Button onClick={close} style={{ backgroundColor: 'rgb(214, 129, 1)', marginTop: '20px', marginBottom: '20px', marginLeft: '5px' }} variant="contained" color="primary">
                No
            </Button>
        </div>
    );
}

export default DeleteUserForm;
