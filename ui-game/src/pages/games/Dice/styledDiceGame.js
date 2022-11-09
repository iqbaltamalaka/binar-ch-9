import styled from "styled-components";
import { Link } from "react-router-dom";

export const Root = styled.div`
background-color: #9c835f;
background-size: cover;
width: 100%;
height: 100vh;
display:flex;
`;
export const LinkTo = styled(Link)`
  text-decoration: none;
  width: 50%;
  height: 10vh;
  padding-top: 20%;
  color: white;
  &:hover {
    color: black;
  }
`;
export const Container = styled.div`
margin-top:5rem;
margin-left:25rem;
`
export const TextLink = styled.div`
  font-size: 35px;
  padding-top: 7%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Win = styled.div`
display: flex;
    flex-direction: row;
    justify-content: center;
    justify-items: center;
    align-items: center;
    color: white;
    margin-bottom: -1em;
`

export const H1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  align-items: center;
  color: white;
`;
export const Player = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
  margin-bottom: -2em;
`;

export const TextScore = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
  margin-bottom: 2em;
`;

export const Div = styled.div``

export const Dice1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5vh;
  margin-bottom: 6em;
  margin-right:8rem;
`;
export const Dice2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5vh;
  margin-bottom: 6em;
  margin-right:5rem;
`;
export const Footer = styled.div`
  color: #eeeeee;
  text-align: center;
  font-family: "Indie Flower", cursive;
  margin-top: 1%;
`;

export const Button = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

export const Btn = styled.div`
  /* border: solid 1px red; */
  margin: auto;
  width: 70%;
  text-align: center;
  padding-top: 2%;
`;

export const Button5 = styled.div`
background-color: #555555;
  color: white;
  border: 2px solid #555555;
  border-radius: 20px;
  &:hover{
    background-color: #e1e1e1;
    color: rgb(73, 73, 73);
  }`
  

/* CSS */
export const Button82pushable = styled.div`
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;

export const Button82shadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
`;

export const Button82edge = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(
    to left,
    hsl(340deg 100% 16%) 0%,
    hsl(340deg 100% 32%) 8%,
    hsl(340deg 100% 32%) 92%,
    hsl(340deg 100% 16%) 100%
  );
`;

export const Button82front = styled.div`
  display: block;
  position: relative;
  padding: 12px 27px;
  border-radius: 12px;
  font-size: 1.1rem;
  color: white;
  background: hsl(345deg 100% 47%);
  will-change: transform;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
`;
