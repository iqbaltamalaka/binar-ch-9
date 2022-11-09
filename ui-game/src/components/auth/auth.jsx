import React,{useState} from "react";
import * as Components from './styled'
import axios from '../../utility/axios'
import {toast} from 'react-toastify'
import { Grid, TextField } from "@mui/material";
import { Backspace } from "@mui/icons-material";
import { FacebookLoginButton, GithubLoginButton, GoogleLoginButton } from "react-social-login-buttons";

export default function Auth(){
  const [value, setValue] = useState({
    username: '',
    password: '',
  })

  const handleChange = (name) => (e) => {
    setValue({ ...value, [name]: e.target.value })
  }
  const handleLogin = async () => {
    try {
      const { data } = await axios.post('/user/login', {
        username: value.username,
        password: value.password,
      })
      console.log(data.data.token);
      localStorage.setItem('_q', data.data.token)
      window.location.reload()
      toast.success('Login success')
    } catch (error) {
      toast.error('login error')
    }
  }
  return (
    <Components.Root>
      <Components.Linked to='/' ><Components.Back><Backspace fontSize="large" sx={{mt:0.2, ml:5, mr:3}} /> BACK</Components.Back></Components.Linked>
        <Grid sx={{ml:60}} display='flex' flexDirection='column' justifyContent='center' alignItems='center' item xs={12} sm={12} lg={6} xl={6} md={6}>
        <TextField
        onChange={handleChange('username')}
          required
          id="filled-required"
          label="User Name"
          variant="filled"
        />
          <TextField
          onChange={handleChange('password')}
          sx={{mt:3}}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          color="warning"
        />
        <Components.Button onClick={handleLogin}>LOGIN</Components.Button>
        <Components.Linked to='/auth/register' ><Components.Button2>SIGN UP</Components.Button2></Components.Linked>
        <Components.LoginButton item xs={12} sm={12} lg={6} xl={6} md={6}>
        <FacebookLoginButton />
        <GithubLoginButton />
        <GoogleLoginButton />
        </Components.LoginButton>
        </Grid>
    </Components.Root>
  )
}