import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import React, { useEffect, useState } from "react";
import Logo from "./../../assets/logo.png";
import axios from "./../../utility/axios";
import * as Components from "./styledHeader";
import { AccountCircle, Gamepad, Person } from "@mui/icons-material";

export default function Header() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile();
  }, []);
  const getProfile = async () => {
    try {
      const { data } = await axios.get("/user/profile");
      setProfile(data);
    } catch (error) {
      setProfile(null);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("_q");
    window.location.reload();
  };
  return (
    <Components.Root>
      <Components.Header>
        <Components.Logo>
          <img src={Logo} alt="Logo" name="Logo" />
        </Components.Logo>
        <Components.NavBar>
          <Components.Move to="/">
            <HomeOutlinedIcon />
            <Components.H1>Home</Components.H1>
          </Components.Move>
        </Components.NavBar>
        <Components.NavBar>
          <Components.Move to="/apps/home">
            <Person />
            <Components.H1>Profile Page</Components.H1>
          </Components.Move>
        </Components.NavBar>
        <Components.NavBar>
          <Components.Move to="/apps/gamelist">
            <Gamepad />
            <Components.H1>Game List</Components.H1>
          </Components.Move>
        </Components.NavBar>
        <Components.NavBar>
          <Components.Profile>
            <Components.Auth>
              {profile === null ? (
                <Components.Move to="/auth/login">Sign In</Components.Move>
              ) : (
                <>
                  <Components.Span onClick={handleLogout}>
                 <AccountCircle /> {profile?.username}, Logout?
                  </Components.Span>
                </>
              )}
            </Components.Auth>
          </Components.Profile>
        </Components.NavBar>
      </Components.Header>
    </Components.Root>
  );
}
