import styled from "styled-components";
import { Link } from "react-router-dom";

export const Root = styled.div`
background: transparent;
display: flex;
flex-direction: column;
color:black;
`
export const ToggleButton = styled.button`
color:white;
display: flex;
flex-direction: column;
justify-content: center;
justify-items: center;
align-items: center;
background:transparent;
border:none;
margin-top:1rem;
margin-left:1rem;
cursor:pointer;
&:hover{
  color:white;
}
`
export const LinkTo = styled(Link)`
text-decoration:none;
color:black;
display:flex;
flex-direction:row;
`
export const Drawer = styled.div`
background:black
`
export const DrawerList1 = styled.h1`
color: black;
font-size:1.2em;
display:flex;
flex-direction:row;
margin-top:2rem;
margin-left:1rem;
`
export const DrawerList2 = styled.h1`
color: black;
font-size:1.5em;
display:flex;
flex-direction:row;
margin-left:1rem;
`

