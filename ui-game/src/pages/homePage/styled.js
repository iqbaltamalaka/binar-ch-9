import styled from "styled-components";
import BG from '../../assets/bg.svg'

export const Root = styled.div`
background-image:url("${BG}");
background-size: auto;
height: 100vh;
width: 100%;
display: flex;
`

export const Profile = styled.div`
margin-top:8rem;
`

export const Table = styled.table`
font-family: 'Roboto Slab', serif;
background-color:transparent;
text-align: center;
margin-left:2rem;
margin-right:2rem;
display: flex;
flex-direction: column;
justify-content: space-around;
justify-items: center;
`

export const THead = styled.thead`
font-size:2em;
display: flex;
flex-direction: column;
justify-content: center;
justify-content: center;
`
export const Tr = styled.tr`
background-color:transparent;
padding-right: 5%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
export const Td = styled.td`
background-color:transparent;
font-size:1.5em;
color:white;
display: flex;
flex-direction: row;
`
export const TBody = styled.tbody`
margin-left:2rem;
background-color:transparent;
display: flex;
flex-direction: column;
`
export const Pagination = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
justify-items: center;
align-items: center;
background-color:white;
border-radius:15px;
`
