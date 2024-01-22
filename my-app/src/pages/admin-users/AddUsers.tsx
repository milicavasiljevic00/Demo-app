import React, { useEffect, useState } from 'react'
import { UserHttp } from '../../api/http-services/users.http'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { Box, Container } from '@mui/system'
import { Button, Grid, MenuItem, TextField } from '@mui/material'
import { AdminUserFormValue } from '../../models/admin-user-form-value/AdminUserFormValue'
import { UserRoles } from '../../routes/UserRoles'
import { Role } from '../../models/entities/Role'
import { RoleHttp } from '../../api/http-services/roles.http'
import { AddUsersProps } from './AddUsersProps'
import { useModalContext } from '../../components/popup/modal-context/ModalContext'
import { UserForAdmin } from '../../models/entities/UserForAdmin'

const AddUsers: React.FC<AddUsersProps> = ({ onAdd }) => {

    const userHttp = new UserHttp()
    const roleHttp = new RoleHttp();

    const { register, handleSubmit, formState: { errors } } = useForm<AdminUserFormValue>({ mode: 'onBlur' })
    const { close } = useModalContext();

    const [data, setData] = useState<AdminUserFormValue>({ username: '', firstName: '', lastName: '', userContactInfo: { email: '', contactPhone: '' }, role: null })
    const [roles, setRoles] = useState<Role[]>();

    const onSubmit: SubmitHandler<AdminUserFormValue> = async () => {
        try {
            const response = await userHttp.addUser(data);
            const responseData = response.data;
            close();
            setData({ username: '', firstName: '', lastName: '', userContactInfo: { email: '', contactPhone: '' }, role: null })
            onAdd(responseData as UserForAdmin);
        }
        catch (error) {
            console.error("An error occurred:", error);
            alert("Oops! Something went wrong. Please try again.");
        }
    }

    const handleDataChange = (partialData: Partial<AdminUserFormValue>) => {
        setData({ ...data, ...partialData })
    }

    const fetchRoles = async () => {
        try {
            const response = await roleHttp.getRoles();
            setRoles(response.data);
        } catch (error) {
            console.error('Error fetching roles:', error);
        }
    };

    useEffect(() => {
        fetchRoles();
    }, [])

    return (
        <div>
            <Box style={{ padding: '20px' }}>
                <TextField fullWidth
                    label="Username"
                    placeholder="Username"
                    {
                    ...register("username", {
                        required: "Username is required",
                    })
                    }
                    value={data.username}
                    onChange={(e) => handleDataChange({ username: e.target.value })}
                />
                {
                    errors.username && (
                        <p className='error-msg'>{errors.username.message}</p>
                    )
                }

                <TextField fullWidth
                    label="First name"
                    placeholder='First name'
                    {
                    ...register("firstName", {
                        required: "First name is required",
                    })
                    }
                    value={data.firstName}
                    onChange={(e) => handleDataChange({ firstName: e.target.value })}
                    style={{ marginTop: '20px' }} />
                {
                    errors.firstName && (
                        <p className='error-msg'>{errors.firstName.message}</p>
                    )
                }

                <TextField fullWidth
                    label="Last name"
                    placeholder='Last name'
                    {
                    ...register("lastName", {
                        required: "Last name is required",

                    })
                    }
                    value={data.lastName}
                    onChange={(e) => handleDataChange({ lastName: e.target.value })}
                    style={{ marginTop: '20px' }} />
                {
                    errors.lastName && (
                        <p className='error-msg'>{errors.lastName.message}</p>
                    )
                }

                <TextField fullWidth
                    label="Email"
                    placeholder='Email'
                    {
                    ...register("userContactInfo.email", {
                        required: "Email is required",

                    })
                    }
                    value={data.userContactInfo.email}
                    onChange={(e) => handleDataChange({ userContactInfo: { ...data.userContactInfo, email: e.target.value } })}
                    style={{ marginTop: '20px' }} />
                {
                    errors.userContactInfo?.email && (
                        <p className='error-msg'>{errors.userContactInfo.email.message}</p>
                    )
                }

                <TextField fullWidth
                    label="Phone"
                    placeholder='Phone'
                    {
                    ...register("userContactInfo.contactPhone", {
                        required: "Contact phone is required",

                    })
                    }
                    value={data.userContactInfo.contactPhone}
                    onChange={(e) => handleDataChange({ userContactInfo: { ...data.userContactInfo, contactPhone: e.target.value } })}
                    style={{ marginTop: '20px' }} />
                {
                    errors.userContactInfo?.contactPhone && (
                        <p className='error-msg'>{errors.userContactInfo.contactPhone.message}</p>
                    )
                }

                <TextField
                    fullWidth
                    label="Role"
                    select
                    value={data.role?.id || ''}
                    onChange={(e) => handleDataChange({ role: { id: parseInt(e.target.value) } })}
                    style={{ marginTop: '20px' }}
                >
                    <MenuItem value="" disabled>Select a role</MenuItem>
                    {roles && roles.map((r) => (
                        <MenuItem key={r.id} value={r.id}>
                            {r.role}
                        </MenuItem>
                    ))}
                </TextField>
                {
                    errors.role && (
                        <p className="error-msg">{errors.role.message}</p>
                    )
                }

                <Button onClick={handleSubmit(onSubmit)} style={{ backgroundColor: 'rgb(214, 129, 1)', marginTop: '20px' }} fullWidth variant="contained">Submit</Button>

            </Box>

        </div>
    )

}

export default AddUsers;
