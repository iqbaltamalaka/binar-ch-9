import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { AccountCircle, AddHome, GamepadRounded, Home, Login, Logout } from "@mui/icons-material";
import * as Components from "./styled";
import axios from "./../../utility/axios";
import { useState, useEffect } from "react";
import { Divider } from "@mui/material";

export default function TemporaryDrawer() {
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
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {profile === null ? (
          <List>
          <Components.LinkTo to='/auth/login'>
          <Login sx={{mt:1.6, ml:5}} fontSize="large" />
            <Components.DrawerList2>
                Login
            </Components.DrawerList2>
          </Components.LinkTo>
          <Divider />
          <Components.LinkTo to='/auth/register'>
          <Login sx={{mt:1.6, ml:5}} fontSize="large" />
            <Components.DrawerList2>
                Register
            </Components.DrawerList2>
          </Components.LinkTo>
        </List>
        ) : (
          <>
          <List>
            <Components.DrawerList1>Hello,<AccountCircle /> {profile?.username} </Components.DrawerList1>
            <Divider />
            <Components.LinkTo to='/apps/home'>
            <AddHome sx={{mt:1.6, ml:5}} fontSize="large" />
              <Components.DrawerList2>
                  Profile Page
              </Components.DrawerList2>
            </Components.LinkTo>
            <Divider />
            <Components.LinkTo to='/apps/gamelist'>
            <GamepadRounded sx={{mt:1.6, ml:5}} fontSize="large" />
              <Components.DrawerList2>
                  Game List
              </Components.DrawerList2>
            </Components.LinkTo>
            <Divider />
            <Components.LinkTo onClick={handleLogout}>
            <Logout sx={{mt:1.6, ml:5}} fontSize="large" />
              <Components.DrawerList2>
                LogOut
              </Components.DrawerList2>
            </Components.LinkTo>
          </List>
          </>
        )}
    </Box>
  );
  return (
    <Components.Root>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Components.ToggleButton onClick={toggleDrawer(anchor, true)}>
            <Home fontSize="large" />
            Home Options
          </Components.ToggleButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Components.Root>
  );
}
