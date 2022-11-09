import { Link } from "react-router-dom";
import styled from "styled-components";

export const Root = styled.div`
  position: fixed;
  font-family: 'Roboto Slab', serif;
`;
export const Header = styled.div`
  height: 90px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size:1.5em;
`;
export const H1 = styled.div`
  display: flex;
`;
export const Logo = styled.div`
  display: flex;
  width: 5%;
  height: 6vh;
`;
export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
`;
export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
`;
export const Auth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
`;
export const Span = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  color:white;
  cursor:pointer;
`;
export const Move = styled(Link)`
  color: #F9B23D;
  display: flex;
  text-decoration: none;
  
  &:hover {
    color: white;
  }
`;
