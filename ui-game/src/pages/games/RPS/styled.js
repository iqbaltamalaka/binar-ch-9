import { Link } from "react-router-dom";
import styled from "styled-components";
import BG from '../../../assets/bg.jpg'

export const Root = styled.div`
background-image: url(${BG});
background-size: cover;
height: 100vh;
width: 100%;
display: flex;
`
export const Navbar = styled.nav`
color: white;
display: flex;
flex-directions:row;
`
export const NavbarContents1 = styled(Link)`
position:absolute;
margin-left:2rem;
margin-top:6.2rem;
color:white;
&:hover{
  color:black;
}
`
export const NavbarContents2 = styled.h1`
position:absolute;
margin-top:6.2rem;
margin-left:5rem;
`
export const PlayerResult = styled.h1`
margin-top:8rem;
margin-left:15rem;
position:absolute;
`
export const PlayerChoice = styled.div`
display:flex;
flex-direction: column;
width: 8%;
margin-top:10rem;
margin-left:16rem;
position:absolute;
cursor:pointer;
`
export const PlayerChoices = styled.div`
display:flex;
flex-direction: column;
margin-top:2rem;
cursor:pointer;
&:hover{
  background-color:#9BA17B;
  border-radius:15px;
}
`
export const MiddleContent = styled.div`
font-size:2em;
margin-top:23rem;
margin-left:27rem;
position:absolute;
`
export const MiddleContent2 = styled.div`
font-size:2em;
margin-top:25rem;
margin-left:27rem;
position:absolute;
`
export const ComResult = styled.h1`
margin-top:8rem;
margin-left:48rem;
position:absolute;

`
export const ComChoice = styled.div`
display:flex;
flex-direction: column;
width: 8%;
margin-top:14rem;
margin-left:47rem;
position:absolute;
`
export const ComChoices = styled.h1`
display:flex;
flex-direction: column;
margin-top:7rem;
font-size:7rem;
color:white;
`
export const Refresh = styled.div`
margin-top:34rem;
margin-left:37rem;
position:absolute;
`
 

