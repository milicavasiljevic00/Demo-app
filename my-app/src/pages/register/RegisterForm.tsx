import { useState } from 'react';
import { Container, Grid, Button, TextField, Box } from "@mui/material";
import { useForm, SubmitHandler } from 'react-hook-form';
import './RegisterForm.scss'
import { UserContactInfo } from '../../models/register-form-value/UserContactInfo';
import { RegisterFormValue } from '../../models/register-form-value/RegisterFormValue';
import { UserHttp } from '../../api/http-services/users.http';

const RegisterForm = () => {
    
    const user = new UserHttp();

    const { register, handleSubmit, formState: { errors }, } = useForm<RegisterFormValue>()

    const [data, setData] = useState({ username: '', password: '', firstName: '', lastName: '', email: '', phone: ''})

    const onSubmit: SubmitHandler<RegisterFormValue> = (data) => {
        console.log("final data", data)
        alert(data.username)

        user.registerUser(data)
    }

    return (
        <div className="bg-color">
            <Container fixed>
                <div className="form-wrapper">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} lg={12} md={12}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Box component="span" sx={{ p: 2, color: '#1d395d', textAlign: 'left' }}>
                                    <h1>Register</h1>
                                </Box>
                                <Box>
                                    <TextField fullWidth
                                        label="Username"
                                        placeholder="Enter Username"
                                        {
                                        ...register("username", {
                                            required: "Username is required"

                                        })
                                        }
                                    />
                                    {
                                        errors.username && (
                                            <p className='error-msg'>{errors.username.message}</p>
                                        )
                                    }
                                    <TextField fullWidth
                                        label="Password"
                                        type="password"
                                        placeholder='Password'
                                        {
                                        ...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 10,
                                                message: "Password should be minimum 10 characters long"
                                            }
                                        })
                                        }
                                        style={{ marginTop: '20px' }} />
                                    {
                                        errors.password && (
                                            <p className='error-msg'>{errors.password.message}</p>
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
                                        style={{ marginTop: '20px' }} />
                                    {
                                        errors.userContactInfo?.contactPhone && (
                                            <p className='error-msg'>{errors.userContactInfo.contactPhone.message}</p>
                                        )
                                    }

                                    <Button style={{ marginTop: '20px' }} type="submit" fullWidth variant="contained">Submit</Button>

                                </Box>

                            </form>
                        </Grid>

                    </Grid>
                </div>
            </Container>
        </div>
    )

}
export default RegisterForm;