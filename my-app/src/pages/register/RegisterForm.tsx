import { useEffect, useState} from 'react';
import { Container, Grid, Button, TextField, Box } from "@mui/material";
import { useForm, SubmitHandler } from 'react-hook-form';
import './RegisterForm.scss'
import { RegisterFormValue } from '../../models/register-form-value/RegisterFormValue';
import { UserHttp } from '../../api/http-services/users.http';
import { useNavigate } from 'react-router';

const RegisterForm = () => {
    
    const userHttp = new UserHttp()

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormValue>({mode: 'onBlur'})

    const [data, setData] = useState<RegisterFormValue>({ username: '', password: '', firstName: '', lastName: '', userContactInfo: {email: '', contactPhone: ''}})
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<RegisterFormValue> = async() => {
        try{
            await userHttp.registerUser(data);
            alert("Registration successful");
            navigate('/login');  
        }
        catch(error){
            console.error("An error occurred:", error);
            alert("Oops! Something went wrong. Please try again.");
        }
    }

    const handleDataChange = (partialData:Partial<RegisterFormValue>) => {
        setData({...data,...partialData})
    }

    return (
        <div className="bg-color">
            <Container fixed>
                <div className="form-wrapper">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} lg={12} md={12}>
                            <div>
                                <Box component="span" sx={{ p: 2, color: '#1d395d', textAlign: 'left' }}>
                                    <h1>Register</h1>
                                </Box>
                                <Box>
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
                                        value={data.password}  
                                        onChange={(e) => handleDataChange({ password: e.target.value })}
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

                                    <Button onClick={handleSubmit(onSubmit)} style={{ marginTop: '20px' }} fullWidth variant="contained">Submit</Button>

                                </Box>

                            </div>
                        </Grid>

                    </Grid>
                </div>
            </Container>
        </div>
    )

}
export default RegisterForm;