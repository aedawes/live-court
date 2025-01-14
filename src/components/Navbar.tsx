import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  SwipeableDrawer,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SensorsIcon from "@mui/icons-material/Sensors";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useTheme } from "@mui/material/styles";
import "../styles/Drawer.css";

function Navbar(props: { pageName: string }) {
  const [open, setOpen] = useState(false);

  const theme = useTheme();

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  const MenuItems = [
    { name: "Live Score", icon: <SensorsIcon />, path: "/" },
    { name: "Track Live Match", icon: <ScoreboardIcon />, path: "/Track" },
    { name: "Past Scores", icon: <AccessTimeIcon />, path: "/PastScores" },
  ];

  const DrawerList = (
    <div onClick={toggleDrawer}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          p: 2,
          py: 3,
          alignItems: "center",
          borderBottom: `1px solid ${theme.palette.primary.dark}`,
        }}
      >
        <img className="menu-icon" src="/TennisBall.svg" alt="tennis ball icon" />
        <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
          LiveCourt
        </Typography>
      </Box>
      <List>
        {MenuItems.map((item, index) => (
          <a className="drawer__link" href={item.path} key={item.name}>
            <ListItem key={item.name} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "primary.dark", minWidth: "2rem" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText className="drawer-text" primary={item.name} />
              </ListItemButton>
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ p: 1, backgroundColor: theme.palette.background.paper }}>
        <Toolbar sx={{ color: "text.primary" }}>
          <img className="menu-icon" src="/TennisBall.svg" alt="tennis ball icon" />
          <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
            {props.pageName}
          </Typography>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ pr: 1 }}>
            <MenuIcon onClick={toggleDrawer} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer open={open} onOpen={toggleDrawer} onClose={toggleDrawer} anchor="right">
        {DrawerList}
      </SwipeableDrawer>
    </Box>
  );
}

export default Navbar;
