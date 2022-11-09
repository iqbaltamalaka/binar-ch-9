import styled from "styled-components";
import BG from '../../assets/bg.svg'
import { Link } from "react-router-dom";

export const Root = styled.div`
background:url(${BG});
width: 100%;
height: 100vh;
display: flex;
font-family: 'Roboto Slab', serif;
`
export const Linked = styled(Link)`

`
export const Back =styled.div`
text-decoration: none;
color: white;
width: 150px;
height: 8%;
font-size:2em;
display:flex;
flex-direction:row;
position: absolute; 
cursor: pointer;
margin-top:2rem;
font-family: 'Roboto Slab', serif;S
&:hover {
  background-color: #61764B;
}
`
export const Login = styled.div`
display: flex;
flex-direction: column;
width: 30%;
height:100%;
justify-content: center;
justify-items: center;
align-items: center;
margin-top: 2rem;
margin-left: 27rem;
font-family: 'Roboto Slab', serif;
font-weight: 600;
background-color: #F3AF34;
border-radius:15px;
`
export const Button = styled.button`
width: 200px;
height: 50px;
border-radius: 15px;
border-color: transparent;
cursor: pointer;
margin-top: 2rem;
color:black;
background-color:#A8E890;
box-shadow: 0 0 10px -1px white;
font-family: 'Roboto Slab', serif;
font-weight: 600;
&:hover {
  background-color: #61764B;
}
`
export const Button2 = styled.button`
width: 200px;
height: 50px;
border-radius: 15px;
border-color: transparent;
cursor: pointer;
margin-top: 1rem;
background-color:#A8E890;
box-shadow: 0 0 10px -1px white;
font-family: 'Roboto Slab', serif;
font-weight: 600;
color:black;
&:hover {
  background-color: #61764B;
}
`
export const LoginButton = styled.div`
width: 300px;
height: 20px;
border-radius: 15px;
`
