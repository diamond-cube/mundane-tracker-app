import { Box } from "@mui/material";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import { routes } from "../constants/routes";

export default function MainContent() {
  return (
    <NavBar>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Box sx={{ width: "min(1200px, 100%)" }}>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Box>
      </Box>
    </NavBar>
  );
}
