import { useEffect, useState } from 'react';
import { Container, Grid, Button, TextField, Box } from "@mui/material";
import { useForm, SubmitHandler } from 'react-hook-form';
import './LoginForm.scss'
import { LoginFormValue } from '../../models/login-form-value/LoginFormValue';
import { UserHttp } from '../../api/http-services/users.http';
import { useNavigate } from 'react-router';

const LoginForm = () => {

    const user = new UserHttp()

    const { register, handleSubmit, formState: { errors }, trigger  } = useForm<LoginFormValue>({mode: 'onBlur'})
    const [data, setData] = useState<LoginFormValue>({ username: '', password: ''})
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<LoginFormValue> = async () => {
          user.loginUser(data);
          navigate('/home')
      }

    const handleDataChange = (field: keyof LoginFormValue, partialData:Partial<LoginFormValue>) => {
        setData({...data,...partialData});
    }

    return (
        <div className="bg-color">
            <Container fixed>
                <div className="form-wrapper">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} lg={12} md={12}>
                            <div>
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
                                        value={data.username}  
                                        onChange={(e) => handleDataChange('username', { username: e.target.value })}
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
                                        onChange={(e) => handleDataChange('password', { password: e.target.value })}
                                        style={{ marginTop: '20px' }} />
                                    {
                                        errors.password && (
                                            <p className='error-msg'>{errors.password.message}</p>
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
export default LoginForm;