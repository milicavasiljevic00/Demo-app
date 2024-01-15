import { useState } from 'react';
import { Container, Grid, Button, TextField, Box } from "@mui/material";
import { useForm, SubmitHandler } from 'react-hook-form';
import './LoginForm.scss'
import { LoginFormValue } from '../../models/login-form-value/LoginFormValue';

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm<LoginFormValue>()
    const [data, setData] = useState({ username: '', password: '' })

    const onSubmit: SubmitHandler<LoginFormValue> = (data) => {
        console.log("final data", data)
        alert(data.username)
    }

    return (
        <div className="bg-color">
            <Container fixed>
                <div className="form-wrapper">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} lg={12} md={12}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Box component="span" sx={{ p: 2, color: '#1d395d', textAlign: 'left' }}>
                                    <h1>Login</h1>
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
                                                message: "Password should be 10 characters long"
                                            }
                                        })
                                        }
                                        style={{ marginTop: '20px' }} />
                                    {
                                        errors.password && (
                                            <p className='error-msg'>{errors.password.message}</p>
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
export default LoginForm;