import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import {
  AppBar,
  Divider,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
  ListItemButton,
  Toolbar,
  Typography,
  TextField,
  Button,
  Stack,
  InputAdornment,
  IconButton,
} from "@mui/material";

import {
  SettingsOutlined,
  HomeOutlined,
  MovieOutlined,
  Laptop,
  LibraryBooks,
  Logout,
  SearchRounded,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { buttonStyle, textFieldStyle } from "../styles/styles";

export const drawerWidth = 200;

export default function NavBar({ children }) {
  const nav = useNavigate();
  const menuItems = [
    {
      icon: <HomeOutlined />,
      label: "Home",
      navigate: () => {
        nav("/");
      },
    },
    {
      icon: <MovieOutlined />,
      label: "Movies",
      navigate: () => {
        nav("/movies");
      },
    },
    {
      icon: <Laptop />,
      label: "Anime",
      navigate: () => {
        nav("/anime");
      },
    },
    {
      icon: <LibraryBooks />,
      label: "Manga",
      navigate: () => {
        nav("/manga");
      },
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        color="none"
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          boxShadow: "none",
          alignItems: "center",
          mt: 1,
        }}
      >
        <TextField
          placeholder="Search"
          size="small"
          type="search"
          sx={{ ...textFieldStyle }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <SearchRounded />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography noWrap>Mundane Tracker</Typography>
        </Toolbar>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton onClick={item.navigate}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />

        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon color="default">
                <SettingsOutlined />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon color="default">
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
