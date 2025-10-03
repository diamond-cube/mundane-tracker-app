import React from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import LaptopIcon from "@mui/icons-material/Laptop";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import LightModeIcon from "@mui/icons-material/LightMode";

const drawerWidth = 72;

const menuItems = [
  { icon: <HomeOutlinedIcon />, label: "Home" },
  { icon: <MovieOutlinedIcon />, label: "Movies" },
  { icon: <LaptopIcon />, label: "Anime" },
  { icon: <LibraryBooksIcon />, label: "Manga" },
];

export default function NavBar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#fff",
          borderRight: "1px solid #e0e0e0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          py: 2,
        },
      }}
    >
      {/* Top section: Navigation */}
      <Stack spacing={2}>
        {menuItems.map((item, index) => (
          <Box key={index} textAlign="center">
            <Tooltip title={item.label} placement="right">
              <IconButton color="default">{item.icon}</IconButton>
            </Tooltip>
            <Typography variant="caption" color="textSecondary">
              {item.label}
            </Typography>
          </Box>
        ))}
      </Stack>

      {/* Bottom section: Mode toggle & logout */}
      <Stack spacing={2} alignItems="center">
        <Tooltip title="Toggle light/dark mode" placement="right">
          <IconButton color="default">
            <LightModeIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Logout" placement="right">
          <IconButton color="default">
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </Drawer>
  );
}
