import React,{useState} from "react";
import * as Components from './styledSignUp'
import axios from "../../utility/axios";
import { toast } from 'react-toastify';
import { TextField } from "@mui/material";
import { Backspace } from "@mui/icons-material";

export default function Register(){
  const [SignUp, toggle] = useState(true)
  const [value, setValue] = useState({
    username: '',
    email: '',
    password: '',
  })
  const handleChange = (username) => (e) => {
    setValue({ ...value, [username]: e.target.value })
  }
  const handleRegister = async () => {
    try {
      await axios.post('/user/register', {
        username: value.username,
        email: value.email,
        password: value.password,
      })
      toggle(true)
      toast.success('register success')
    } catch (error) {
      toast.error('register error')
    }
  }
  // const createGame = async() => {
  //   try {
  //     await axios.post('/game/create', {
  //       name: 'Dice',
  //       path: '/apps/dice',
  //       icon: 'https://i.ibb.co/1zPMyYy/Dice-Pict-removebg-preview.png'
  //     })
  //     await axios.post('/game/create', {
  //       name: 'RPS',
  //       path: '/apps/RPS',
  //       icon: 'https://i.ibb.co/VJ3kbkt/batu-2.png'
  //     })
  //     toggle(true)
  //     toast.success('Create Game success')
  //   } catch (error) {
  //     toast.error('Create Game error')
  //   }
  // }
  return(
    <Components.Root>
      <Components.Linked to='/auth/login' ><Components.Back><Backspace fontSize="large" sx={{mt:0.2, ml:5, mr:3}} />Login</Components.Back></Components.Linked>
      <Components.SignUp>
      <TextField
          onChange={handleChange('username')}
          required
          id="filled-required"
          label="User Name"
          variant="filled"
        />
          <TextField
          onChange={handleChange('email')}
          sx={{mt:3}}
          required
          id="filled-required"
          label="Email"
          variant="filled"
        />
          <TextField
          onChange={handleChange('password')}
          sx={{mt:3}}
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          color="warning"
        />
        <Components.Button onClick={handleRegister}>SIGN UP</Components.Button>
        {/* <Components.Button onClick={createGame} required>Klik Me for the game</Components.Button> */}
      </Components.SignUp>
    </Components.Root>
  )
}