import styled from "styled-components";
import BG from "../../assets/bg.jpg";
import { Link } from "react-router-dom";

export const Root = styled.div`
  background: url(${BG});
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-items: center;
`;

export const Text = styled.div`
  color: white;
  font-size: 4rem;
  display: flex;
  font-family: 'Roboto Slab', serif;
`;

export const LogoGame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3rem;
  width: 60%;
`;
export const Move = styled(Link)`
  color: white;
  text-decoration:none;
`;
export const H1 = styled.div`
  color: white;
  text-decoration:none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-items: center;
  font-size:4em;
  font-family: 'Roboto Slab', serif;
`;
export const LogoRps = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
justify-items: center;
margin-top: 2rem;
`;
